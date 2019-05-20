const store = require('../store')

const changePlayer = () => {
  if (currentPlayer === 'x') {
    currentPlayer = 'o'
  } else {
    currentPlayer = 'x'
  }
}

let currentPlayer = 'x'

const onNewGameSuccess = responseData => {
  console.log('success', responseData)
  $('#turn').text('New Game: X turn')
  store.game = responseData.game
  console.log('store is', store)
  $('.square').html('')
}
const onNewGameFailure = () => {
  $('#turn').text('New Game Failed')
}

const onZeroSuccess = game => {
  console.log('success', game)
  $('#0').text(currentPlayer)
  $('#0').off('click')
  changePlayer()
}

const onZeroFailure = () => {
  console.log('failure')
}
const onOneSuccess = game => {
  console.log('success', game)
  $('#1').text(currentPlayer)
  $('#1').off('click')
  changePlayer()
}

const onOneFailure = () => {
  console.log('failure')
}
const onTwoSuccess = game => {
  console.log('success', game)
  $('#2').text(currentPlayer)
  $('#2').off('click')
  changePlayer()
}

const onTwoFailure = () => {
  console.log('failure')
}
const onThreeSuccess = game => {
  console.log('success', game)
  $('#3').text(currentPlayer)
  $('#3').off('click')
  changePlayer()
}

const onThreeFailure = () => {
  console.log('failure')
}
const onFourSuccess = game => {
  console.log('success', game)
  $('#4').text(currentPlayer)
  $('#4').off('click')
  changePlayer()
}

const onFourFailure = () => {
  console.log('failure')
}
const onFiveSuccess = game => {
  console.log('success', game)
  $('#5').text(currentPlayer)
  $('#5').off('click')
  changePlayer()
}

const onFiveFailure = () => {
  console.log('failure')
}
const onSixSuccess = game => {
  console.log('success', game)
  $('#6').text(currentPlayer)
  $('#6').off('click')
  changePlayer()
}

const onSixFailure = () => {
  console.log('failure')
}
const onSevenSuccess = game => {
  console.log('success', game)
  $('#7').text(currentPlayer)
  $('#7').off('click')
  changePlayer()
}

const onSevenFailure = () => {
  console.log('failure')
}
const onEightSuccess = game => {
  console.log('success', game)
  $('#8').text(currentPlayer)
  $('#8').off('click')
  changePlayer()
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
