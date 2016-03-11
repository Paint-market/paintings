var request = require('supertest');
var app = require('../app');
var test = require('tape');
var queryTest = require('/extractCreatorId')

test('get status code 200 from /paintings/creatorId', function(t) {
  request(app)
  //GET /paintings?creatorId = 11
  //this should return creatorID OF 11 which should be 2 painting objects
  .get('/v1/paintings')
  .query({creatorId:11})
  .expect(200)
  .end(function(err, res) {
    t.false(err, 'no error for false')
      // t.true(res.body.hasOwnProperty('paintings'), 'res.body returns an object that has a property called paintings with a creatorID')
      console.log(res.body)
      t.equal(res.body.paintings.length, 2, "returns all paintings")
      t.end()
    })
})
