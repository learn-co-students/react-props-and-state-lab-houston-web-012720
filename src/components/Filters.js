import React from 'react'

class Filters extends React.Component {

  constructor() {
    super()
    this.state = {
      type: "all"
    }
  }

  handleFindPets = (event) => {
    if (this.state.type != "all") {
      fetch("/api/pets?type=" + this.state.type)
        .then(res => res.json())
        .then(pets => {
          this.props.onFindPetsClick(pets)
        })
    } else {
      fetch("/api/pets")
        .then(res => res.json())
        .then(pets => {
          this.props.onFindPetsClick(pets)
        })
    }
  }

  handleChangeType = (event) => {
    this.setState({ type: event.target.value })
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type"
                  onChange={event => this.handleChangeType(event)}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button"
                  onClick={event => this.handleFindPets(event)}>
            Find pets
          </button>
        </div>
      </div>
    )
  }
}

export default Filters
