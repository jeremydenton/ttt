'use strict'
const config = require('../config')
const store = require('../store')

// const gameDelta = () => {
//   console.log('from api gameDelta')
//   console.log('store is', store)
//
//   return $.ajax({
//     url: config.apiUrl + '/games:id',
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }

const currentPlayer = 'x'

// const changePlayer = () => {
//   if (currentPlayer === 'x') {
//     currentPlayer = 'o'
//     console.log('if' + currentPlayer)
//   } else {
//     currentPlayer = 'x'
//     console.log('else' + currentPlayer)
//   }
//   console.log(currentPlayer)
// }

const newGame = () => {
  console.log('from api newGame')
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateGame = (square) => {
  const id = store.game.id
  console.log(id)
  return $.ajax({
    url: config.apiUrl + 'games/' + id,
    method: 'PATCH',
    data: {
      'game': {
        'cell': {
          'index': square,
          'value': currentPlayer
        },
        'over': false
      }
    },
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
module.exports = {
  newGame,
  updateGame
  // changePlayer
}
