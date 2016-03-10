var request = require('supertest');
var app = require('../app');
var test = require('tape');

var expectedPaintings = {[{id: 1, title: 'Sunlight', url: ' ', image: 'www.google.com/cats'}]}

test('get status code 200 from /v1/paintings', function(t) {
  request(app)
    .get('/v1/paintings')
    .expect(200)
    .end(function(err, res) {
      t.false(err)
      t.end()
    })
})

test('get /v1/paintings returns an objects with the property "paintings"', function(t) {
  request(app)
    .get('/v1/paintings')
    .expect(200)
    .end(function(err, res) {
      t.false(err)
      t.true(res.body.hasOwnProperty('paintings'))
      t.end()
    })
})
