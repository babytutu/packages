const assert = require('assert')

const { FgCyan } = require('../utils/color')
const { type, typeString, rule } = require('../utils/getType')

console.log(FgCyan, `commit-msg type is ${type}`)

describe('commit-msg', function() {
  it('should return false when the value is test', function() {
    assert.equal(rule.test('test'), false)
  })
  it('should return false when the value is test:sss', function() {
    assert.equal(rule.test('test:sss'), false)
  })
  it('should return false when the value is test sss', function() {
    assert.equal(rule.test('test sss'), false)
  })
  it('should return true when the value is feat:xxx', function() {
    assert.equal(rule.test('feat:xxx'), true)
  })
})
