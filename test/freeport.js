var freeport = require('../lib/freeport')
var expect = require('chai').expect
var describe = require('mocha').describe
var it = require('mocha').it

describe('freeport', () => {
  it('should find a free port', () => {
    return freeport()
    .then((port) => {
      expect(port).to.be.a('number')
      expect(port).to.not.equal(0)
    })
  })
  it('should work with a external promise library', () => {
    var bluebird = require('bluebird')
    return freeport(bluebird)
    .then((port) => {
      expect(port).to.be.a('number')
      expect(port).to.not.equal(0)
    })
  })
})
