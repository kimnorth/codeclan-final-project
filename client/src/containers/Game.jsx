import React, { Component } from 'react'
import GrassBackground from '../components/game/GrassBackground.jsx'
import Mole from '../components/game/Mole.jsx'
import ScoreBoard from '../components/game/ScoreBoard.jsx'
import io from "socket.io-client"


class Game extends React.Component {

  constructor(props){
    super(props)
    this.socket = io("/lobby")
  }

  componentDidMount(){
    console.log("Rendered")
  }

  render(){

    return (

    <div id="game-container">
      <h1>Whack-A-Mole</h1>
      <ScoreBoard />
      <GrassBackground mole={<Mole />} />
    </div>
    )

  }

}


export default Game;