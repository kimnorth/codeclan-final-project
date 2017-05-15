import React, { Component } from 'react'
import Mole from '../components/game/Mole.jsx'
import ScoreBoard from '../components/game/ScoreBoard.jsx'
import io from "socket.io-client"
import GameLogic from '../models/GameLogic.js'


class Game extends React.Component {

  constructor(props){
    super(props)
    this.socket = io("/lobby")
    this.socket.on("click mole", this.updateView.bind(this))
    this.socket.on("synch time", this.updateTime.bind(this))
    this.state = {
      player1: {
        timesHitMole: 0
      },
      player2: {
        timesHitMole: 0
      },
      molesUp: [
        {mole1: false},
        {mole2: false},
        {mole3: false},
        {mole4: false},
        {mole5: false},
        {mole6: false},
        {mole7: false},
        {mole8: false},
        {mole9: false}
      ],
      timeLeft: 60
    }
    this.gameLogic = new GameLogic()
  }

  createTimer(){
    console.log(this)
    console.log(this.state.timeLeft)
      setInterval(function(){
        if (this.state.timeLeft > 0){
          let newTimeLeft = this.state.timeLeft
          newTimeLeft--
          this.setState({timeLeft: newTimeLeft})
          this.socket.emit('synch time', this.state.timeLeft)
        }
        else if (this.state.timeLeft === 0){
          return
        }
      }.bind(this), 1000) 
  }

  updateTime(data){
    console.log(data)
    let synchedTime = data
    this.setState({timeLeft: synchedTime})
  }

  moleBehaviour(){
    // Randomly make moles appear and disappear

    // Pick a random mole from array of moles
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
    // this.createTimer()
    // this.gameLogic.changeMoleState(this.state)
  }

  handleButtonClick(){
    if (this.state.timeLeft === 60){
      this.createTimer()  
    }
    else {
      return
    }
  }

  render(){

    return (

    <div id="game-container">
      
      <h1>Whack-A-Mole</h1>
      
      <ScoreBoard 
      player1score={this.state.player1.timesHitMole}
      timeLeft={this.state.timeLeft}
      player2score={this.state.player2.timesHitMole} 
      />

      <button onClick={this.handleButtonClick.bind(this)}>Start Timer</button>
      
      <div id="grass-background">
        <table>
        <tbody>
          <tr>
              <td>
                <div className="mole-hole">
                  <Mole id="mole1" handleMoleClick={this.handleMoleClick.bind(this)}/>
                </div>
              </td>
              <td>
                <div className="mole-hole">
                  <Mole id="mole2" handleMoleClick={this.handleMoleClick.bind(this)}/>
                </div>
              </td> 
              <td>
                <div className="mole-hole">
                  <Mole id="mole3" handleMoleClick={this.handleMoleClick.bind(this)}/>
                </div>
              </td>
          </tr>
          <tr>
              <td>
                <div className="mole-hole">
                  <Mole id="mole4" handleMoleClick={this.handleMoleClick.bind(this)}/>
                </div>
              </td>
              <td>
                <div className="mole-hole">
                  <Mole id="mole5" handleMoleClick={this.handleMoleClick.bind(this)}/>
                </div>
              </td> 
              <td>
                <div className="mole-hole">
                  <Mole id="mole6" handleMoleClick={this.handleMoleClick.bind(this)}/>
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