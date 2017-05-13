import React, { Component } from 'react'
import GrassBackground from '../components/game/GrassBackground.jsx'

class Game extends React.Component {

  componentDidMount(){
    console.log("Rendered")
  }

  render(){

    return (

    <div id="game-container">
      <h1>Game</h1>
      <GrassBackground />
    </div>
    )

  }

}


export default Game;