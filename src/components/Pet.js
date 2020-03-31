import React from 'react'

class Pet extends React.Component {

  adopt_buttons = () => {
    if (this.props.pet.isAdopted){
      return (<button className="ui disabled button">Already adopted</button>)
    }
    else {
      return <button onClick = {() => this.props.onAdoptPet(this.props.pet.id)} className="ui primary button">Adopt pet</button>
    }
  }

  gender_icon = () => {
    if (this.props.pet.gender != 'male'){
      return ('♀')
    }
    else{
      return ('♂')
    }
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.gender_icon()}
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
          {this.adopt_buttons()}
        </div>
      </div>
    )
  }
}

export default Pet
