'use strict'

module.exports = bail

function bail(error) {
  if (error) {
    throw error
  }
}
