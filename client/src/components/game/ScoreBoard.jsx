import React, { Component } from 'react'

class ScoreBoard extends React.Component {

  render(){

    return (

    <div id="score-board">
    
    <table>
      <tbody>
        <tr>
          <td width="200px">
            <div id="player1-score">
              <h3>Player 1</h3>
              <h1>{this.props.player1score}</h1>
            </div>
          </td>
          <td width="200px">
            <div>
              Time: {this.props.timeLeft}
            </div>
            </td> 
          <td width="200px">
            <div id="player2-score">
              <h3>Player 2</h3>
              <h1>{this.props.player2score}</h1>
            </div>
        </td>
        </tr>
      </tbody>
    </table>  
      
    </div>

    )
  }

}


export default ScoreBoard;