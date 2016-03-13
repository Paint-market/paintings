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
      t.equal(res.body.paintings.length, 7, "returns all paintings")
      t.end()
    })
})

test('get status code 200 from /paintings/creatorId', function(t) {
  request(app)
  //GET /paintings?creatorId = 11
  //this should return creatorID OF 11 which should be 2 painting objects
  .get('/v1/paintings')
  .query({creatorId:11})
  .expect(200)
  .end(function(err, res) {
    t.false(err, 'no error returned')
      // t.true(res.body.hasOwnProperty('paintings'), 'res.body returns an object that has a property called paintings with a creatorID')
      console.log(res.body)
      t.equal(res.body.paintings.length, 2, "returns all paintings by creator 11")
      t.end()
    })
})

test('get a list of all paintings owned by owner 111', function(t){
  request(app)
  .get('/v1/paintings')
  .query({ownerId:111})
  .expect(200)
  .end(function(err, res) {
    t.false(err, 'no error returned')
      console.log(res.body)
      t.equal(res.body.paintings.length, 2, "returns all paintings by creator 11")
      t.end()
    })
})

test('entering invalid search parameters returns 404 error', function(t){
  request(app)
  .get('/v1/paintings')
  .query({fakeId:99999})
  .expect(404)
  .end(function(err, res) {
    t.false(err, 'this is the correct error code')
      console.log(res.body)
      t.deepEqual(res.text,'invalid search parameters', "entering invalid id returns invalid search parameters")
      t.end()
    })
})



