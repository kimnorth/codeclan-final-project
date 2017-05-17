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
    const randNum = Math.floor(Math.random() * 9)
    const mole = ("mole" + (randNum+1))
    console.log(mole)
    return mole
  }

}

export default GameLogic;