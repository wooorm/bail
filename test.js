import test from 'tape'
import {bail} from './index.js'

test('bail([err])', function (t) {
  t.doesNotThrow(function () {
    bail()
  })

  t.throws(function () {
    bail('foo')
  }, /foo/)

  t.throws(function () {
    bail(new Error('bar'))
  }, /bar/)

  t.end()
})
