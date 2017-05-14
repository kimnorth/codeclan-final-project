import React, { Component } from 'react'

class Mole extends React.Component {

  render(){

    return (

    <div id="mole-div">
      <img id="mole-image" src="mole.png" onClick={this.props.handleMoleClick} />
    </div>

    )
  }

}


export default Mole;