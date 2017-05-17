class GameLogic {

  // Function that determines who has won by comparing scores

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

  pickRandomMole(molesState){
    console.log(molesState)
    const randNum = Math.floor(Math.random() * 10)
    return molesState[randNum-1]
  }
  
  // Emit which mole has popped up and which has disappeared

  

  // Emit removing a mole once a player has clicked on it

  // Timer for round

}

export default GameLogic;