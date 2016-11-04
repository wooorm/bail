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
