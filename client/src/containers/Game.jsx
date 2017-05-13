import React, { Component } from 'react'
import GrassBackground from '../components/game/GrassBackground.jsx'
import Mole from '../components/game/Mole.jsx'


class Game extends React.Component {

  componentDidMount(){
    console.log("Rendered")
  }

  render(){

    return (

    <div id="game-container">
      <h1>Game</h1>
      <GrassBackground mole={<Mole />} />
    </div>
    )

  }

}


export default Game;