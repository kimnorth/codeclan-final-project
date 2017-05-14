import React, { Component } from 'react'
// import GrassBackground from '../components/game/GrassBackground.jsx'
import Mole from '../components/game/Mole.jsx'
import ScoreBoard from '../components/game/ScoreBoard.jsx'
import io from "socket.io-client"


class Game extends React.Component {

  constructor(props){
    super(props)
    this.socket = io("/lobby")
    this.state = {
      player1: {
        timesHitMole: 0
      },
      player2: {
        timesHitMole: 0
      }
    }
  }

  handleMoleClick(){
    console.log('Mole clicked')
  }

  componentDidMount(){
    console.log("Rendered")
  }

  render(){

    return (

    <div id="game-container">
      
      <h1>Whack-A-Mole</h1>
      
      <ScoreBoard />
      
      <div id="grass-background">
        <table>
        <tbody>
          <tr>
              <td>
                <div className="mole-hole">
                  <Mole handleMoleClick={this.handleMoleClick.bind(this)}/>
                </div>
              </td>
              <td>
                <div className="mole-hole">
                  <Mole handleMoleClick={this.handleMoleClick.bind(this)}/>
                </div>
              </td> 
              <td>
                <div className="mole-hole">
                  <Mole handleMoleClick={this.handleMoleClick.bind(this)}/>
                </div>
              </td>
          </tr>
          <tr>
              <td>
                <div className="mole-hole">
                  <Mole handleMoleClick={this.handleMoleClick.bind(this)}/>
                </div>
              </td>
              <td>
                <div className="mole-hole">
                  <Mole handleMoleClick={this.handleMoleClick.bind(this)}/>
                </div>
              </td> 
              <td>
                <div className="mole-hole">
                  <Mole handleMoleClick={this.handleMoleClick.bind(this)}/>
                </div>
              </td>
          </tr>
          <tr>
              <td>
                <div className="mole-hole">
                  <Mole handleMoleClick={this.handleMoleClick.bind(this)}/>
                </div>
              </td>
              <td>
                <div className="mole-hole">
                  <Mole handleMoleClick={this.handleMoleClick.bind(this)}/>
                </div>
              </td> 
              <td>
                <div className="mole-hole">
                  <Mole handleMoleClick={this.handleMoleClick.bind(this)}/>
                </div>
              </td>
          </tr>
        </tbody>
        </table>
      </div>
    </div>
    )

  }

}


export default Game;