import React, { Component } from 'react'
// import GrassBackground from '../components/game/GrassBackground.jsx'
import Mole from '../components/game/Mole.jsx'
import ScoreBoard from '../components/game/ScoreBoard.jsx'
import io from "socket.io-client"


class Game extends React.Component {

  constructor(props){
    super(props)
    this.socket = io("/lobby")
    this.socket.on("click mole", this.updateView.bind(this))
    this.state = {
      player1: {
        timesHitMole: 0
      },
      player2: {
        timesHitMole: 0
      }
    }
  }

  updateView(data){
    console.log(data)
    this.setState({player2: data.player1})
  }

  handleMoleClick(){

    let player1 = this.state.player1
    player1.timesHitMole++

    this.setState({
      player1: player1
    })

    this.socket.emit(
      'click mole', { 
      player1 }
    )
  }

  componentDidMount(){
    console.log("Rendered")
  }

  render(){

    return (

    <div id="game-container">
      
      <h1>Whack-A-Mole</h1>
      
      <ScoreBoard 
      player1score={this.state.player1.timesHitMole} 
      player2score={this.state.player2.timesHitMole} 
      />
      
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