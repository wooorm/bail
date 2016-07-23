/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module bail
 * @fileoverview Test suite for `bail`.
 */

'use strict';

/* Dependencies. */
var test = require('tape');
var bail = require('./');

/* Tests. */
test('bail([err])', function (t) {
  t.doesNotThrow(function () {
    bail();
  });

  t.throws(function () {
    bail('foo');
  }, /foo/);

  t.throws(function () {
    bail(new Error('bar'));
  }, /bar/);

  t.end();
});
