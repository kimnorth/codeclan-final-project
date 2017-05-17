class GameLogic {

  // Function that determines who has won by comparing scores

  calculateWinner(player1score, player2score){
    if (player1score > player2score){
      return "Player 1"
    }
    else if (player2score > player1score){
      return "Player 2"
    }
    else if (player1score === player2score){
      return "Draw!"
    }
  }

  // Function that makes moles state change randomly between up and down

  pickRandomMole(molesState){
    const randNum = Math.floor(Math.random() * 9)
    const mole = ("mole" + (randNum+1))
    return mole
  }

}

export default GameLogic;