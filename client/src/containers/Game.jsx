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
        { mole: "mole1",
          up: true},
        { mole: "mole2",
          up: true},
        { mole: "mole3",
          up: true},
        { mole: "mole4",
          up: true},
        { mole: "mole5",
          up: true},
        { mole: "mole6",
          up: true},
        { mole: "mole7",
          up: true},
        { mole: "mole8",
          up: true},
        { mole: "mole9",
          up: true}
      ],
      timeLeft: 60
    }
    this.gameLogic = new GameLogic()
  }

  createTimer(){
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
    let synchedTime = data
    this.setState({timeLeft: synchedTime})
  }

  makeMoleDisappear(moleImage){
    console.log(moleImage)
    const moleImageId = moleImage.id
    let mole = document.getElementById(moleImageId)
    mole.style.display = 'none';
    const allMoleStates = this.state.molesUp
    allMoleStates.forEach(function(element){
      if (element.mole === moleImageId){
        element.up = false
      }
    })
    this.setState({molesUp: allMoleStates})
    }

  moleBehaviour(){
    // Randomly make moles appear and disappear
    
    const pickedMole = this.gameLogic.pickRandomMole(this.state.molesUp)
    console.log(pickedMole)
    // while (this.state.timeLeft > 0){
    //   // at random intervals, pop up a mole
    // }
    // While loop to encapsulate the game loop
    // Randomly pick a number in milliseconds for the interval between 3000 and 5000
    // setInterval()
    // each mole pops down after 3 seconds
    // Pick a random mole from array of moles
    // Find mole with that index pos
    
  }


  updateView(data){
    console.log(data)
    
    this.setState({
      molesUp: data.wholeState.molesUp,
      player2: data.wholeState.player1})
    
    // Make mole disappear
    this.state.molesUp.forEach(function(element){
      if (element.up === false){
        console.log(element)
        const htmlMole = document.getElementById(element.mole)
        this.makeMoleDisappear(htmlMole)
        // console.log(htmlMole)
      }
    
    }.bind(this))  
  }


  handleMoleClick(event){

    console.log(event.target)

    this.makeMoleDisappear(event.target)

    // need to send whole state so current board layout can be sent for each click

    let wholeState = this.state
    wholeState.player1.timesHitMole++

    this.setState({
      wholeState
    })

    this.socket.emit(
      'click mole', { 
      wholeState }
    )
  }

  componentDidMount(){
    this.moleBehaviour()
  }

  handleButtonClick(){
    if (this.state.timeLeft === 60){
      this.createTimer()  
    }
    else {
      return
    }
    this.moleBehaviour()
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
                  <Mole id="mole7" handleMoleClick={this.handleMoleClick.bind(this)}/>
                </div>
              </td>
              <td>
                <div className="mole-hole">
                  <Mole id="mole8" handleMoleClick={this.handleMoleClick.bind(this)}/>
                </div>
              </td> 
              <td>
                <div className="mole-hole">
                  <Mole id="mole9" handleMoleClick={this.handleMoleClick.bind(this)}/>
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