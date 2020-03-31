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

  onChangeType = (e) => {
    let dropdown = document.querySelector("#type")
    this.setState ({
      filters: {
        type: dropdown.value
      }
    })
  }

  onFindPetsClick = (e) => {
    let url
    this.state.filters.type === "all"
    ? url = "/api/pets"
    : url = `/api/pets?type=${this.state.filters.type}`

    fetch (url)
    .then (resp => resp.json())
    .then (petsData => {
      this.setState({
        pets: petsData
      })
    })
  }

  onAdoptPet = (petId) => {
    let arrOfPets = this.state.pets 
    let selectedPet = arrOfPets.filter ( pet =>
      pet.id === petId
    ) // this returns an array not an object, why we call [0]
    let indexOfSelectedPet = arrOfPets.indexOf(selectedPet[0])
    selectedPet[0].isAdopted = true
    arrOfPets[indexOfSelectedPet] = selectedPet[0]
    this.setState({
      pets: arrOfPets
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
