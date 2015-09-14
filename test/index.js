var assert = require('assert')
var assertNodeVersion = require('../')
var path = require('path')

// Test assertion using file
//
// Delete environment variable which would prevent a correct test
// Without this the test would have a wrong 'expected' value
delete process.env.npm_package_engines_node
assert.throws(function () {
  assertNodeVersion(path.join(__dirname, 'example'))
}, /Expected: 'v0\.6\.0'/)

// Test range assertions
// Version range
process.env.npm_package_engines_node = '0.4.0 - 0.6.0'
assert.throws(function () {
  assertNodeVersion(path.join(__dirname, 'example'))
}, /Expected: '0.4.0 - 0.6.0'/)

// Larger than
process.env.npm_package_engines_node = '>=0.10.0'
assertNodeVersion(path.join(__dirname, 'example'))
