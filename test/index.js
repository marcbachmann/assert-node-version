var assert = require('assert')
var assertNodeVersion = require('../')
var path = require('path')

assert.throws(function () {
  assertNodeVersion(path.join(__dirname, 'example'))
}, /Expected: 'v0\.6\.0'/)
