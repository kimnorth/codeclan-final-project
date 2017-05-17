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
    this.socket.on("mole pop", this.renderMoles.bind(this))
    this.state = {
      player1: {
        timesHitMole: 0
      },
      player2: {
        timesHitMole: 0
      },
      "mole1": true,
      "mole2": true,
      "mole3": true,
      "mole4": true,
      "mole5": true,
      "mole6": true,
      "mole7": true,
      "mole8": true,
      "mole9": true,
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

  renderMoles(data){
    this.makeMoleAppear(data.pickedMole)
  }

  makeMoleDisappear(moleImage){
    const moleImageId = moleImage.id
    let mole = document.getElementById(moleImageId)
    mole.style.display = 'none';
    // const allMoleStates = this.state.molesUp
    // let currentMoleIndex = null
    this.state.moleImageId = false;
    // allMoleStates.forEach(function(element, index){
    //   if (element.mole === moleImageId){
    //     element.up = false
    //     currentMoleIndex = index
    //     console.log(currentMoleIndex)
    //   }
    // })

    // console.log(this.state.molesUp[currentMoleIndex].up)
    // let currentMole = this.state.molesUp[currentMoleIndex]
    // this.setState(this.state.molesUp[currentMoleIndex]: {up: false})
    // }
  }

  makeMoleAppear(moleImage){
    let htmlMole = document.getElementById(moleImage)
    htmlMole.style.display = 'initial'
    // const moleState = this.state.molesUp
    // console.log(moleState)
  }

  moleBehaviour(){
    // Randomly make moles appear
    
    setInterval(function(){
      if(this.state.timeLeft > 0){
        const pickedMole = this.gameLogic.pickRandomMole(this.state)
        this.makeMoleAppear(pickedMole)
        this.socket.emit( 
          'mole pop',
          {pickedMole}
        )
      }
    }.bind(this), 1000)

  }


  updateView(data){
    console.log(data)
    let clickedMole = data.clickedMole

    console.log(clickedMole)

    this.setState({
      player2: data.player1
    })

    // Switch statement that picks which mole to set to false based on data

    switch(data.clickedMole){
      case data.clickedMole = "mole1":
        this.setState({"mole1": false})
        console.log(this.state)
        break
      case data.clickedMole = "mole2":
        this.setState({"mole2": false})
        console.log(this.state)
        break
      case data.clickedMole = "mole3":
        this.setState({"mole3": false})
        console.log(this.state)
        break
      case data.clickedMole = "mole4":
        this.setState({"mole4": false})
        console.log(this.state)
        break
      case data.clickedMole = "mole5":
        this.setState({"mole5": false})
        console.log(this.state)
        break
      case data.clickedMole = "mole6":
        this.setState({"mole6": false})
        console.log(this.state)
        break
      case data.clickedMole = "mole7":
        this.setState({"mole7": false})
        console.log(this.state)
        break
      case data.clickedMole = "mole8":
        this.setState({"mole8": false})
        console.log(this.state)
        break
      case data.clickedMole = "mole9":
        this.setState({"mole9": false})
        console.log(this.state)
        break
    }

    const htmlMole = document.getElementById(data.clickedMole)
    this.makeMoleDisappear(htmlMole)

  }


  handleMoleClick(event){
    this.makeMoleDisappear(event.target)
    let clickedMoleState = event.target.id
    console.log(clickedMoleState)

    let player1 = this.state.player1
    player1.timesHitMole++
    this.setState({
      player1: player1
    })

    this.socket.emit(
      'click mole', {
        player1: player1,
        clickedMole: clickedMoleState}
    )

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