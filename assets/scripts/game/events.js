'use strict'
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

const gameOver = board => {
  const array = store.game.cells
  console.log(array)
  if (((array[0] === 'x') && (array[1] === 'x') && (array[2] === 'x')) ||
    ((array[3] === 'x') && (array[4] === 'x') && (array[5] === 'x')) ||
    ((array[6] === 'x') && (array[7] === 'x') && (array[8] === 'x')) ||
    ((array[0] === 'x') && (array[3] === 'x') && (array[6] === 'x')) ||
    ((array[1] === 'x') && (array[4] === 'x') && (array[7] === 'x')) ||
    ((array[2] === 'x') && (array[5] === 'x') && (array[8] === 'x')) ||
    ((array[0] === 'x') && (array[4] === 'x') && (array[8] === 'x')) ||
    ((array[2] === 'x') && (array[4] === 'x') && (array[6] === 'x'))) {
    $('#turn').text('X wins!')
    $('.square').off('click')
  } else if (((array[0] === 'o') && (array[1] === 'o') && (array[2] === 'o')) ||
    ((array[3] === 'o') && (array[4] === 'o') && (array[5] === 'o')) ||
    ((array[6] === 'o') && (array[7] === 'o') && (array[8] === 'o')) ||
    ((array[0] === 'o') && (array[3] === 'o') && (array[6] === 'o')) ||
    ((array[1] === 'o') && (array[4] === 'o') && (array[7] === 'o')) ||
    ((array[2] === 'o') && (array[5] === 'o') && (array[8] === 'o')) ||
    ((array[0] === 'o') && (array[4] === 'o') && (array[8] === 'o')) ||
    ((array[2] === 'o') && (array[4] === 'o') && (array[6] === 'o'))) {
    $('#turn').text('O wins!')
    $('.square').off('click')
  } else if (array.find(!'')) {
    $('#turn').text('Tie')
    $('.square').off('click')
  }
}

const onZero = event => {
  event.preventDefault()
  console.log(event.target.id)
  api.updateGame(0)
    .then(ui.onZeroSuccess)
    .then(api.changePlayer)
    .then(gameOver)
    .catch(ui.onZeroFailure)
}

const onOne = event => {
  event.preventDefault()
  console.log('click1')
  api.updateGame(1)
    .then(ui.onOneSuccess)
    .then(api.changePlayer)
    .then(gameOver)
    .catch(ui.onOneFailure)
}
const onTwo = event => {
  event.preventDefault()
  console.log('click2')
  api.updateGame(2)
    .then(ui.onTwoSuccess)
    .then(api.changePlayer)
    .then(gameOver)
    .catch(ui.onTwoFailure)
}
const onThree = event => {
  event.preventDefault()
  console.log('click3')
  api.updateGame(3)
    .then(ui.onThreeSuccess)
    .then(api.changePlayer)
    .then(gameOver)
    .catch(ui.onThreeFailure)
}
const onFour = event => {
  event.preventDefault()
  console.log('click4')
  api.updateGame(4)
    .then(ui.onFourSuccess)
    .then(api.changePlayer)
    .then(gameOver)
    .catch(ui.onFourFailure)
}
const onFive = event => {
  event.preventDefault()
  console.log('click5')
  api.updateGame(5)
    .then(ui.onFiveSuccess)
    .then(api.changePlayer)
    .then(gameOver)
    .catch(ui.onFiveFailure)
}
const onSix = event => {
  event.preventDefault()
  console.log('click6')
  api.updateGame(6)
    .then(ui.onSixSuccess)
    .then(api.changePlayer)
    .then(gameOver)
    .catch(ui.onSixFailure)
}
const onSeven = event => {
  event.preventDefault()
  console.log('click7')
  api.updateGame(7)
    .then(ui.onSevenSuccess)
    .then(api.changePlayer)
    .then(gameOver)
    .catch(ui.onSevenFailure)
}
const onEight = event => {
  event.preventDefault()
  console.log('click8')
  api.updateGame(8)
    .then(ui.onEightSuccess)
    .then(api.changePlayer)
    .then(gameOver)
    .catch(ui.onEightFailure)
}
const addHandlers = () => {
  $('#0').on('click', onZero)
  $('#1').on('click', onOne)
  $('#2').on('click', onTwo)
  $('#3').on('click', onThree)
  $('#4').on('click', onFour)
  $('#5').on('click', onFive)
  $('#6').on('click', onSix)
  $('#7').on('click', onSeven)
  $('#8').on('click', onEight)
}
const onNewGame = event => {
  event.preventDefault()
  console.log('new game')
  api.newGame()
    .then(ui.onNewGameSuccess)
    .then(addHandlers)
    .then(store.currentPlayer = 'x')
    .then(api.currentPlayer = 'x')
    .catch(ui.onNewGameFailure)
}
module.exports = {
  onNewGame,
  addHandlers
}
