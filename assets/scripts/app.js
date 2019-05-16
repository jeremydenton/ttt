'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events')
const gameEvents = require('./game/events')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-pw').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#0').one('click', gameEvents.zero)
  $('#1').one('click', gameEvents.one)
  $('#2').one('click', gameEvents.two)
  $('#3').one('click', gameEvents.three)
  $('#4').one('click', gameEvents.four)
  $('#5').one('click', gameEvents.five)
  $('#6').one('click', gameEvents.six)
  $('#7').one('click', gameEvents.seven)
  $('#8').one('click', gameEvents.eight)
})
