import React from 'react'

class Pet extends React.Component {

  constructor() {
    super()
    this.state = {
      isAdopted: false
    }
  }

  handleAdoptButton = (event) => {
    this.setState({isAdopted: !this.props.isAdopted})
  }

  render() {

    var alreadyBtn = "disabled"
    var adoptBtn = "primary"

    if (this.state.isAdopted === true) {
      alreadyBtn = "primary"
      adoptBtn = "disabled"
    } else {
      alreadyBtn = "disabled"
      adoptBtn = "primary"
    }

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          <button className={`ui ${alreadyBtn} button`}
                  onClick={event => this.handleAdoptButton(event)}
          >Already adopted</button>
          <button className={`ui ${adoptBtn} button`}
                  onClick={event => this.handleAdoptButton(event)}
          >Adopt pet</button>
        </div>
      </div>
    )
  }
}

export default Pet
