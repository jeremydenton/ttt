'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events')
const gameEvents = require('./game/events')

$(() => {
  $('#signUp').on('submit', authEvents.onSignUp)
  $('#signIn').on('submit', authEvents.onSignIn)
  $('#changePassword').on('submit', authEvents.onChangePassword)
  $('#signOut').on('submit', authEvents.onSignOut)
  $('#0').on('click', gameEvents.onZero)
  $('#1').on('click', gameEvents.onOne)
  $('#2').on('click', gameEvents.onTwo)
  $('#3').on('click', gameEvents.onThree)
  $('#4').on('click', gameEvents.onFour)
  $('#5').on('click', gameEvents.onFive)
  $('#6').on('click', gameEvents.onSix)
  $('#7').on('click', gameEvents.onSeven)
  $('#8').on('click', gameEvents.onEight)
  $('#newGame').on('click', gameEvents.onNewGame)
})
