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
            Player 1
            <p>{this.props.player1score}</p>
          </div>
        </td>
        <td width="200px">
          <div>
            Time: 0:59
          </div>
          </td> 
        <td width="200px">
          <div id="player2-score">
            Player 2
            <p>{this.props.player1score}</p>
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