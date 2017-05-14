import React, { Component } from 'react'
import GrassBackground from '../components/game/GrassBackground.jsx'
import Mole from '../components/game/Mole.jsx'
import ScoreBoard from '../components/game/ScoreBoard.jsx'


class Game extends React.Component {

  componentDidMount(){
    console.log("Rendered")
  }

  render(){

    return (

    <div id="game-container">
      <h1>Game</h1>
      <ScoreBoard />
      <GrassBackground mole={<Mole />} />
    </div>
    )

  }

}


export default Game;