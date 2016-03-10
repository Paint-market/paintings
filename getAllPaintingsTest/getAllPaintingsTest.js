var request = require('supertest');
var app = require('../app');
var test = require('tape');

var expectedPaintings = {
  paintings: [
 { paintingId: 1, creatorId: 1, ownerId: 1, title: 'Pixel', image: 'www.google.com/paintings', price: 55 },
 { paintingId: 2, creatorId: 2, ownerId: 2, title: 'Pixel v Vector', image: 'www.google.com/paintings2', price: 5 },
 { paintingId: 3, creatorId: 3, ownerId: 3, title: 'Vector', image: 'www.google.com/paintings3', price: 10},
 { paintingId: 4, creatorId: 2, ownerId: 1, title: 'Pixel2', image: 'www.google.com/paintings', price: 10}
  ]
}

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
