const store = require('../store')

const currentPlayer = 'x'

const onNewGameSuccess = responseData => {
  console.log('success', responseData)
  $('#turn').text('New Game: X turn')
  store.game = responseData.game
  console.log('store is', store)
}
const onNewGameFailure = () => {
  $('#turn').text('New Game Failed')
}

const onZeroSuccess = game => {
  console.log('success', game)
  $('#0').text(currentPlayer)
}

const onZeroFailure = () => {
  console.log('failure')
}
const onOneSuccess = game => {
  console.log('success', game)
  $('#1').text(currentPlayer)
}

const onOneFailure = () => {
  console.log('failure')
}
const onTwoSuccess = game => {
  console.log('success', game)
  $('#2').text(currentPlayer)
}

const onTwoFailure = () => {
  console.log('failure')
}
const onThreeSuccess = game => {
  console.log('success', game)
  $('#3').text(currentPlayer)
}

const onThreeFailure = () => {
  console.log('failure')
}
const onFourSuccess = game => {
  console.log('success', game)
  $('#4').text(currentPlayer)
}

const onFourFailure = () => {
  console.log('failure')
}
const onFiveSuccess = game => {
  console.log('success', game)
  $('#5').text(currentPlayer)
}

const onFiveFailure = () => {
  console.log('failure')
}
const onSixSuccess = game => {
  console.log('success', game)
  $('#6').text(currentPlayer)
}

const onSixFailure = () => {
  console.log('failure')
}
const onSevenSuccess = game => {
  console.log('success', game)
  $('#7').text(currentPlayer)
}

const onSevenFailure = () => {
  console.log('failure')
}
const onEightSuccess = game => {
  console.log('success', game)
  $('#8').text(currentPlayer)
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
  onEightFailure
}
