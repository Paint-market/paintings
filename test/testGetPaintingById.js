var request = require('supertest');
var app = require('../app');
var test = require('tape');


test('return all items in the database', function(t) {
  request(app)
    .get('/paintings')
    .expect(200)
    .end(function(err, res) {
      t.false(err, "no error")
      t.equal(res.body.paintings.length, 3, "number of paintings in database should =3")
      t.end()
    })
})

test('return all paintings by one artist', function(t) {
  request(app)
    .get('/paintings')
    .query({"creatorId": 11})
    .expect(200)
    .end(function(err, res) {
      t.false(err, "no error")
      t.equal(res.body.length, 1, "number of paintings by creatorID")
      t.end()
    })
  })

test('return paintings by title', function(t) {
  request(app)
    .get('/paintings')
    .query({title: 'scream'})
    .expect(200)
    .end(function(err, res) {
      t.false(err, "no error")
      t.equal(res.body[0].title, 'scream', "1 painting with correct title returned")
      t.end()
  })
})

test('return error when search info is invalid', function(t) {
  request(app)
    .get('/paintings')
    .query({creatorID: ""})
    .expect(404)
    .end(function(err, res) {
      t.false(err, "bad request ")
      t.end()
    })
})

test('return error when search info doesnt exist', function(t) {
  request(app)
    .get('/paintings')
    .query({creatorID: 12})
    .expect(404)
    .end(function(err, res) {
      t.false(err, "bad request ")
      t.end()
    })
})


