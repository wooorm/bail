import test from 'tape'
import {bail} from './index.js'

test('bail([err])', function (t) {
  t.doesNotThrow(function () {
    bail()
  })

  t.doesNotThrow(function () {
    bail(null)
  })

  t.doesNotThrow(function () {
    bail(undefined)
  })

  t.throws(function () {
    // @ts-ignore
    bail('foo')
  }, /foo/)

  t.throws(function () {
    bail(new Error('bar'))
  }, /bar/)

  t.end()
})
