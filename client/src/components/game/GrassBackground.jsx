import React, { Component } from 'react'
import Mole from './Mole.jsx'
import MoleHole from './MoleHole.jsx'

class GrassBackground extends React.Component {

  render(){

    return (

    <div id="grass-background">
      
      <table>
      <tbody>
        <tr>
            <td>
              <div className="mole-hole">
                <Mole />
              </div>
            </td>
            <td>
              <div className="mole-hole">
                <Mole />
              </div>
            </td> 
            <td>
              <div className="mole-hole">
                <Mole />
              </div>
            </td>
        </tr>
        <tr>
            <td>
              <div className="mole-hole">
                {this.props.mole}
              </div>
            </td>
            <td>
              <div className="mole-hole">
                {this.props.mole}
              </div>
            </td> 
            <td>
              <div className="mole-hole">
                {this.props.mole}
              </div>
            </td>
        </tr>
        <tr>
            <td>
              <div className="mole-hole">
                {this.props.mole}
              </div>
            </td>
            <td>
              <div className="mole-hole">
                {this.props.mole}
              </div>
            </td> 
            <td>
              <div className="mole-hole">
                {this.props.mole}
              </div>
            </td>
        </tr>
      </tbody>
      </table>

    </div>

    )
  }

}


export default GrassBackground;