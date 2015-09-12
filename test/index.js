var assert = require('assert')
var assertNodeVersion = require('../')
var path = require('path')

// Delete environment variable which would prevent a correct test
// Without this the test would have a wrong 'expected' value
delete process.env.npm_package_engines_node

assert.throws(function () {
  assertNodeVersion(path.join(__dirname, 'example'))
}, /Expected: 'v0\.6\.0'/)
