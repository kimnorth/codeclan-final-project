import React, { Component } from 'react'
import Mole from './Mole.jsx'

class GrassBackground extends React.Component {

  render(){

    return (

    <div id="grass-background">
      
      <table>
        <tr>
          <td>{this.props.mole}</td>
          <td>{this.props.mole}</td> 
          <td>{this.props.mole}</td>
        </tr>
        <tr>
          <td>{this.props.mole}</td>
          <td>{this.props.mole}</td> 
          <td>{this.props.mole}</td>
        </tr>
        <tr>
          <td>{this.props.mole}</td>
          <td>{this.props.mole}</td> 
          <td>{this.props.mole}</td>
        </tr>
      </table>

    </div>

    )
  }

}


export default GrassBackground;