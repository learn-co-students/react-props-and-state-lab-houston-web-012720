import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

import 'whatwg-fetch';

class App extends React.Component {
  constructor() {
    super()
    // fetchMock.get('/api/pets', getAll())

    this.state = {
      // pets: getAll(),
      pets: [],
      filters: {
        type: 'all'
      }
    }

  }

  // fetchMock.get('/data/pets', getAll())

  
  onFindPetsClick = () => {
    let url = '/api/pets'
    if (this.state.filters.type !== 'all'){
      url = url + '?type=' + this.state.filters.type
    }
    fetch(url).then(resp => resp.json()).then(json => this.setState(json))
  }

  onChangeType = () => {
    this.setState({filters: {type: document.querySelector("select#type").value}})
  }

  filterPets = () => {

    if (this.state.filters.type === 'all'){
      return this.state.pets
    }
    else {
      return this.state.pets.filter(pet => pet.type === this.state.filters.type)
    }
  }

  onAdoptPet = (id) => {
    let AllPets = this.state.pets
    AllPets.find(pet => pet.id === id).isAdopted = true
    this.setState({pets: AllPets})
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
              <Filters onFindPetsClick = {this.onFindPetsClick} onChangeType = {this.onChangeType}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets = {this.filterPets()} onAdoptPet = {this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
