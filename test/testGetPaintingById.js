var request = require('supertest');
var app = require('../app');
var test = require('tape');

test('get status code 200 from /v1/paintings/:id', function(t) {
  request(app)
    .get('/v1/paintings/:id')
    .expect(200)
    .end(function(err, res) {
      t.false(err, "no error")
      t.end()
    })
})

test('get /v1/paintings/:id returns a paintings object', function(t) {
  request(app)
    .get('/v1/paintings/:id')
    .expect(200)
    .end(function(err, res) {
      t.false(err, "no error")
      t.true(typeof(res.body) === 'object', "the response returns an object")
      t.end()
    })
})

test('requesting invalid paintings returns error', function(t){
  request(app)
    .get('/v1/cats/900')
    .expect(404)
    .end(function(err, res) {
      t.false(err, "this is the correct error code")
      t.deepEqual(res.text, 'Invalid ID', "the response is an invalid id")
      t.end()
    })
})



