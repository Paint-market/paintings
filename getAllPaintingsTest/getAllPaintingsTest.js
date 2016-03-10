var request = require('supertest');
var app = require('../app');
var test = require('tape');

var expectedCats = {[{id: 1, name: 'furball', story: 'djkdaflknbfdlnbflkandbaldbfkn', image: 'www.google.com/cats'}]}
test('get status code 200 from /v1/cats', function(t) {
  request(app)
    .get('/v1/cats')
    .expect(200)
    .end(function(err, res) {
      t.false(err)
      t.end()
    })
})

// test('get /v1/cats returns an objects with the property "cats"', function(t) {
//   request(app)
//     .get('/v1/cats')
//     .expect(200)
//     .end(function(err, res) {
//       t.false(err)
//       t.true(res.body.hasOwnProperty('cats'))
//       t.end()
//     })
// })
