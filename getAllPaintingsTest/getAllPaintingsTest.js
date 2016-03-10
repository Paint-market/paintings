var request = require('supertest');
var app = require('../app');
var test = require('tape');

var expectedPaintings = { [paintingId: 1, creatorId: 'Sunlight', ownerId: ' ', title: '', image: 'www.google.com/paintings', price: 55 }]}

test('get status code 200 from /v1/paintings', function(t) {
  request(app)
    .get('/v1/paintings')
    .expect(200)
    .end(function(err, res) {
      t.false(err)
      t.end()
    })
})

// test('get /v1/paintings returns an objects with the property "paintings"', function(t) {
//   request(app)
//     .get('/v1/paintings')
//     .expect(200)
//     .end(function(err, res) {
//       t.false(err)
//       t.true(res.body.hasOwnProperty('paintings'))
//       t.end()
//     })
// })
