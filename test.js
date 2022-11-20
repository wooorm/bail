import assert from 'node:assert/strict'
import test from 'node:test'
import {bail} from './index.js'

test('bail([err])', function () {
  assert.doesNotThrow(function () {
    bail()
  })

  assert.doesNotThrow(function () {
    bail(null)
  })

  assert.doesNotThrow(function () {
    bail(undefined)
  })

  assert.throws(function () {
    // @ts-expect-error
    bail('foo')
  }, /foo/)

  assert.throws(function () {
    bail(new Error('bar'))
  }, /bar/)
})
