const store = require('../store')

let currentPlayer = 'x'

const changePlayer = () => {
  if (currentPlayer === 'x') {
    currentPlayer = 'o'
    $('#turn').text('O\'s turn')
  } else {
    currentPlayer = 'x'
    $('#turn').text('X\'s turn')
  }
}

const onNewGameSuccess = responseData => {
  console.log('success', responseData)
  $('#turn').text('New Game: X\'s turn')
  store.game = responseData.game
  console.log('store is', store)
  $('.square').html('')
  currentPlayer = 'x'
}
const onNewGameFailure = () => {
  $('#turn').text('New Game Failed')
}

const onZeroSuccess = game => {
  $('#0').text(currentPlayer)
  $('#0').off('click')
  changePlayer()
  console.log(game)
  store.game = game.game
}

const onZeroFailure = () => {
  console.log('failure')
}
const onOneSuccess = game => {
  console.log('success', game)
  $('#1').text(currentPlayer)
  $('#1').off('click')
  changePlayer()
  store.game = game.game
}

const onOneFailure = () => {
  console.log('failure')
}
const onTwoSuccess = game => {
  console.log('success', game)
  $('#2').text(currentPlayer)
  $('#2').off('click')
  changePlayer()
  store.game = game.game
}

const onTwoFailure = () => {
  console.log('failure')
}
const onThreeSuccess = game => {
  console.log('success', game)
  $('#3').text(currentPlayer)
  $('#3').off('click')
  changePlayer()
  store.game = game.game
}

const onThreeFailure = () => {
  console.log('failure')
}
const onFourSuccess = game => {
  console.log('success', game)
  $('#4').text(currentPlayer)
  $('#4').off('click')
  changePlayer()
  store.game = game.game
}

const onFourFailure = () => {
  console.log('failure')
}
const onFiveSuccess = game => {
  console.log('success', game)
  $('#5').text(currentPlayer)
  $('#5').off('click')
  changePlayer()
  store.game = game.game
}

const onFiveFailure = () => {
  console.log('failure')
}
const onSixSuccess = game => {
  console.log('success', game)
  $('#6').text(currentPlayer)
  $('#6').off('click')
  changePlayer()
  store.game = game.game
}

const onSixFailure = () => {
  console.log('failure')
}
const onSevenSuccess = game => {
  console.log('success', game)
  $('#7').text(currentPlayer)
  $('#7').off('click')
  changePlayer()
  store.game = game.game
}

const onSevenFailure = () => {
  console.log('failure')
}
const onEightSuccess = game => {
  console.log('success', game)
  $('#8').text(currentPlayer)
  $('#8').off('click')
  changePlayer()
  store.game = game.game
}

const onEightFailure = () => {
  console.log('failure')
}

module.exports = {
  onNewGameSuccess,
  onNewGameFailure,
  onZeroSuccess,
  onZeroFailure,
  onOneSuccess,
  onOneFailure,
  onTwoSuccess,
  onTwoFailure,
  onThreeSuccess,
  onThreeFailure,
  onFourSuccess,
  onFourFailure,
  onFiveSuccess,
  onFiveFailure,
  onSixSuccess,
  onSixFailure,
  onSevenSuccess,
  onSevenFailure,
  onEightSuccess,
  onEightFailure,
  currentPlayer,
  changePlayer
}
