class GameLogic {

  constructor(){
    
  }

  calculateWinner(player1score, player2score){
    if (player1score > player2score){
      return "Player 1 wins"
    }
    else if (player2score > player1score){
      return "Player 2 wins"
    }
    else if (player1score === player2score){
      return "Draw!"
    }
  }

  // Function that makes moles state change randomly between up and down

  // Function that determines who has won by comparing scores

  // Emit which mole has popped up and which has disappeared

  // Emit removing a mole once a player has clicked on it

  // Timer for round

}

module.exports = GameLogic;