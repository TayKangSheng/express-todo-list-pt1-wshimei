var expect = require('chai').expect
var request = require('supertest')
var app = require('../index')

describe('Site Test', function () {
  it('should return a 200 response', function (done) {
    request(app).get('/todos')
    .expect(200, done)
  })
  it('should return an array', function (done) {
    request(app).get('/todos')
    .set('Accept', 'application/json')
    .end(function (error, response) {
      expect(response.body).to.be.an('array')
      done()
    })
  })
})
