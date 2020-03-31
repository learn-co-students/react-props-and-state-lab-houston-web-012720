import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }
  onChangeType = ({target: {value}}) => {
    this.setState({
      filters: {...this.state.filters, type: value }
    })
  }

  fetchforPets = () => {
    let mainLink = '/api/pets'
    if (this.state.filters.type !== 'all') {
      mainLink += `?type=${this.state.filters.type}`
    }
    // switch(this.state.filters.type){
    //   case “all”:
    //     mainLink = ‘api/pets’;
    //     break;
    //   case “cat”:
    //     mainLink = ‘api/pets?type=cat’
    //     break;
    //   case “dog”:
    //     mainLink = ‘api/pets?type=dog’
    //     break;
    //   case “micropig”:
    //     mainLink = ‘api/pets?type=micropig’
    //     break;
    // }
    fetch(mainLink)
    .then(res => res.json())
    .then(petslist => this.setState({
      pets: petslist
    }))
    
  }
  onAdoptPet = (petid) => {
  //  let selectedpet =  this.state.pets.find(pet => pet.id == petid)
  //  selectedpet.isAdopted = true 
   this.setState({
     pets: this.state.pets.map(pet => {
       if (pet.id == petid){
         return {...pet, isAdopted: true}
        }
      return pet 
        
     })
   })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType= {this.onChangeType} onFindPetsClick={this.fetchforPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
