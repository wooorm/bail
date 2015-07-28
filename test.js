'use strict';

/* eslint-env mocha */

/*
 * Dependencies.
 */

var bail = require('./');
var assert = require('assert');

/*
 * Tests.
 */

describe('bail(err?)', function () {
    it('should work', function () {
        assert.doesNotThrow(function () {
            bail();
        });

        assert.throws(function () {
            bail('foo');
        }, /foo/);

        assert.throws(function () {
            bail(new Error('bar'));
        }, /bar/);
    });
});
