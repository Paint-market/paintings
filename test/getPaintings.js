var request = require('supertest');
var app = require('../app');
var test = require('tape');

test('get status code 200 from /paintings', function(t) {
  request(app)
    .get('/v1/paintings')
    .expect(200)
    .end(function(err, res) {
      t.false(err, 'no error for false')
      t.true(res.body.hasOwnProperty('paintings'), 'res.body returns an object that has a property called paintings')
      // Clarified the following test message - Dominic
      t.equal(res.body.paintings.length, 7, "returns the correct number of paintings in the collection")
      t.end()
    })
})


