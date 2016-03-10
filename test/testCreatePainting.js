var request = require('supertest');
var app = require('../app');
var test = require('tape');

/* get cat by id example
test('get status code 200 from /v1/cats/:id', function(t) {
  request(app)
    .get('/v1/cats/1')
    .expect(200)
    .end(function(err, res) {
      t.false(err, "no error")
      t.end()
    })
})

test('get /v1/cats/:id returns a cat object', function(t) {
  request(app)
    .get('/v1/cats/1')
    .expect(200)
    .end(function(err, res) {
      t.false(err, "no error")
      t.true(typeof(res.body) === 'object', "the response returns an object")
      t.end()
    })
})

test('requesting invalid cat returns error', function(t){
  request(app)
    .get('/v1/cats/900')
    .expect(404)
    .end(function(err, res) {
      t.false(err, "this is the correct error code")
      t.deepEqual(res.text, 'Invalid ID', "the response is an invalid id")
      t.end()
    })
})*/

/* get all cats example
var request = require('supertest');
var app = require('../app');
var test = require('tape');


test('get status code 200 from /v1/cats', function(t) {
  request(app)
    .get('/v1/cats')
    .expect(200)
    .end(function(err, res) {
      t.false(err)
      t.end()
    })
})

test('get /v1/cats returns an object with the property "cats"', function(t) {
  request(app)
    .get('/v1/cats')
    .expect(200)
    .end(function(err, res) {
      t.false(err)
      t.true(res.body.hasOwnProperty('cats'))
      t.end()
    })
})

*/


