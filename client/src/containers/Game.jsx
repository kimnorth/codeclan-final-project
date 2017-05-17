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
    this.socket.on("winner", this.receiveGameOver.bind(this))
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
      timeLeft: 60,
      timeStarted: false,
      winningPlayer: null,
      gameOver: false
    }
    this.gameLogic = new GameLogic()
  }

  receiveGameOver(data){
    // this.setState({gameOver: data.gameOver})
    if(data.gameOver){
      console.log(data)
      if (data.winningPlayer === "Player 1"){
        this.setState({winningPlayer: "Player 2"})    
      }
      else if (data.winningPlayer === "Player 2"){
        this.setState({winningPlayer: "Player 1"})    
      }  
    }
  }

  createTimer(){
      setInterval(function(){
        if (this.state.timeLeft > 0){
          let newTimeLeft = this.state.timeLeft
          newTimeLeft--
          this.setState({timeLeft: newTimeLeft})
          this.socket.emit('synch time', newTimeLeft)
        }
        else if (this.state.timeLeft === 0){
          this.setState({gameOver: true})
          if (this.state.winningPlayer){
            this.setState({winningPlayer: "Player 1"})
            this.showWinner()
          }
          else if (!this.state.winningPlayer){
            this.setState({winningPlayer: "Player 2"})
            this.showWinner()
          }
          let gameOver = this.state.gameOver
          let winner = this.state.winningPlayer
          this.socket.emit('winner', {winningPlayer: winner, gameOver: gameOver})

          return
        }
        this.setState({winningPlayer: this.gameLogic.calculateWinner(this.state.player1.timesHitMole, this.state.player2.timesHitMole)})
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
    this.state.moleImageId = false;
  }

  makeMoleAppear(moleImage){

    let htmlMole = document.getElementById(moleImage)
    htmlMole.style.display = 'initial'
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
    let clickedMole = data.clickedMole
    this.showWinner()

    this.setState({
      player2: data.player1
    })

    switch(data.clickedMole){
      case data.clickedMole = "mole1":
        this.setState({"mole1": false})
        break
      case data.clickedMole = "mole2":
        this.setState({"mole2": false})
        break
      case data.clickedMole = "mole3":
        this.setState({"mole3": false})
        break
      case data.clickedMole = "mole4":
        this.setState({"mole4": false})
        break
      case data.clickedMole = "mole5":
        this.setState({"mole5": false})
        break
      case data.clickedMole = "mole6":
        this.setState({"mole6": false})
        break
      case data.clickedMole = "mole7":
        this.setState({"mole7": false})
        break
      case data.clickedMole = "mole8":
        this.setState({"mole8": false})
        break
      case data.clickedMole = "mole9":
        this.setState({"mole9": false})
        break
    }

    const htmlMole = document.getElementById(data.clickedMole)
    this.makeMoleDisappear(htmlMole)  

    let moleHoleDivId = data.clickedMole
    moleHoleDivId += "-hole"
    let moleHoleDivHTML = document.getElementById(moleHoleDivId)
    moleHoleDivHTML.style.display = 'initial';

  }

  handleMoleClick(event){
    this.makeMoleDisappear(event.target)
    let clickedMoleState = event.target.id

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
    let audio = document.getElementById('mole-hit')
    audio.play()
  }

  showWinner(){
    if (!this.state.gameOver){
      let finalScore = document.getElementById('final-score')
      finalScore.style.display = "initial"  
    }
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

      <div>

      <h1 id="heading">Whack-A-Mole</h1>

    <div id="game-container">
      
      
      
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
                <div id="mole1-div">
                  <div className="mole-hole" id="mole1-hole">
                  </div>  
                  <Mole id="mole1" handleMoleClick={this.handleMoleClick.bind(this)}/>
                </div>
              </td>
              <td>
                <div id="mole2-div">
                  <div className="mole-hole" id="mole2-hole">
                  </div>
                  <Mole id="mole2" handleMoleClick={this.handleMoleClick.bind(this)}/>
                </div>
              </td> 
              <td>
                <div className="mole-hole" id="mole3-div">
                  <div id="mole3-hole">
                  </div>
                  <Mole id="mole3" handleMoleClick={this.handleMoleClick.bind(this)}/>
                </div>
              </td>
          </tr>
          <tr>
              <td>
                <div id="mole4-div">
                <div className="mole-hole" id="mole4-hole">
                </div>  
                <Mole id="mole4" handleMoleClick={this.handleMoleClick.bind(this)}/>
                </div>
              </td>
              <td>
                <div id="mole5-div">
                <div className="mole-hole" id="mole5-hole">
                </div>
                <Mole id="mole5" handleMoleClick={this.handleMoleClick.bind(this)}/>
                </div>
              </td> 
              <td>
                <div id="mole6-div">
                <div className="mole-hole" id="mole6-hole">
                </div>
                <Mole id="mole6" handleMoleClick={this.handleMoleClick.bind(this)}/>
                </div>
              </td>
          </tr>
          <tr>
              <td>
                <div id="mole7-div">
                <div className="mole-hole" id="mole7-hole">
                </div>
                <Mole id="mole7" handleMoleClick={this.handleMoleClick.bind(this)}/>
                </div>
              </td>
              <td>
                <div id="mole8-div">
                <div className="mole-hole" id="mole8-hole">
                </div>
                <Mole id="mole8" handleMoleClick={this.handleMoleClick.bind(this)}/>
                </div>
              </td> 
              <td>
                <div id="mole9-div">
                <div className="mole-hole" id="mole9-hole">
                </div>
                <Mole id="mole9" handleMoleClick={this.handleMoleClick.bind(this)}/>
                </div>
              </td>
          </tr>
        </tbody>
        </table>
      </div>

      <div id="final-score">
        <h2>The winner is: {this.state.winningPlayer}</h2>
      </div>

    </div>
    </div>
    )

  }

}

export default Game;