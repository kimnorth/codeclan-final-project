var mocha = require('mocha')
var assert = require('assert')
var GameLogic = require('../GameLogic.js')

describe('game logic', function(){

  var gameLogic;

  beforeEach(function(){
    gameLogic = new GameLogic()
  })

  it('basic test to get test script working', function(){
    assert.strictEqual(2, 2)
  })

  it('should compare two player scores and return the winner', function(){
    var answer = gameLogic.calculateWinner(2, 1)
    assert.strictEqual("Player 1 wins", answer)
  })

})