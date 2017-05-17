import React, { Component } from 'react'

class Mole extends React.Component {

  constructor(props){
    super(props)
    this.moleID = this.props.id
  }

  render(){

    return (

    <div id="mole-div">
      <img id={this.props.id} className="mole-image" src="mole.png" onClick={this.props.handleMoleClick} />
    </div>

    )
  }

}


export default Mole;