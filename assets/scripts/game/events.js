'use strict'
const api = require('./api.js')
const ui = require('./ui.js')

const currentPlayer = 'x'

// const gameOver = array => {
//   if (((x === 0) && (x === 1) && (x === 2)) ||
//     ((x === 3) && (x === 4) && (x === 5)) ||
//     ((x === 6) && (x === 7) && (x === 8)) ||
//     ((x === 0) && (x === 3) && (x === 6)) ||
//     ((x === 1) && (x === 4) && (x === 7)) ||
//     ((x === 2) && (x === 5) && (x === 8)) ||
//     ((x === 0) && (x === 4) && (x === 8)) ||
//     ((x === 2) && (x === 4) && (x === 6))) {
//     console.log('x wins')
//   } else if (((o === 0) && (o === 1) && (o === 2)) ||
//     ((o === 3) && (o === 4) && (o === 5)) ||
//     ((o === 6) && (o === 7) && (o === 8)) ||
//     ((o === 0) && (o === 3) && (o === 6)) ||
//     ((o === 1) && (o === 4) && (o === 7)) ||
//     ((o === 2) && (o === 5) && (o === 8)) ||
//     ((o === 0) && (o === 4) && (o === 8)) ||
//     ((o === 2) && (o === 4) && (o === 6))) {
//     console.log('o wins')
//   } else if (array.length === 9) {
//     console.log('draw')
//   } else {
//     return game.over === false
//   }
// }

const onZero = event => {
  event.preventDefault()
  console.log('click0')
  api.updateGame(0)
    .then(ui.onZeroSuccess)
    .catch(ui.onZeroFailure)
}

const onOne = event => {
  event.preventDefault()
  console.log('click1')
  api.updateGame(1)
    .then(ui.onOneSuccess)
    .catch(ui.onOneFailure)
}
const onTwo = event => {
  event.preventDefault()
  console.log('click2')
  api.updateGame(2)
    .then(ui.onTwoSuccess)
    .catch(ui.onTwoFailure)
}
const onThree = event => {
  event.preventDefault()
  console.log('click3')
  api.updateGame(3)
    .then(ui.onThreeSuccess)
    .catch(ui.onThreeFailure)
}
const onFour = event => {
  event.preventDefault()
  console.log('click4')
  api.updateGame(4)
    .then(ui.onFourSuccess)
    .catch(ui.onFourFailure)
}
const onFive = event => {
  event.preventDefault()
  console.log('click5')
  api.updateGame(5)
    .then(ui.onFiveSuccess)
    .catch(ui.onFiveFailure)
}
const onSix = event => {
  event.preventDefault()
  console.log('click6')
  api.updateGame(6)
    .then(ui.onSixSuccess)
    .catch(ui.onSixFailure)
}
const onSeven = event => {
  event.preventDefault()
  console.log('click7')
  api.updateGame(7)
    .then(ui.onSevenSuccess)
    .catch(ui.onSevenFailure)
}
const onEight = event => {
  event.preventDefault()
  console.log('click8')
  api.updateGame(8)
    .then(ui.onEightSuccess)
    .catch(ui.onEightFailure)
}
const onNewGame = event => {
  event.preventDefault()
  console.log('new game')
  api.newGame()
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFailure)
}

module.exports = {
  onZero,
  onOne,
  onTwo,
  onThree,
  onFour,
  onFive,
  onSix,
  onSeven,
  onEight,
  onNewGame,
  currentPlayer
}
