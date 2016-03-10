var request = require('supertest');
var app = require('../app');
var test = require('tape');

test('create a new painting', function(t){
  t.deepEqual(addNewPainting(paintingsSample, newPainting), expectedPaintings, 'The new painting has been added with a paintingId greater than the largest paintingId')
  t.end()
})

var newPainting = {
    paintingId: 4, creatorId: 44, ownerId: 444, title: 'I am new', image: 'https://www.flickr.com/photos/imagomundiphoto/25032203254/', price: 400
    }

var paintingsSample = {
 paintings: [
  {paintingId: 1, creatorId: 11, ownerId: 111, title: 'depressed', image: 'https://www.flickr.com/photos/imagomundiphoto/25636563386/', price: 100},
  {paintingId: 2, creatorId: 22, ownerId: 222, title: 'disturbed', image: 'https://www.flickr.com/photos/imagomundiphoto/25636574156/', price: 200},
  {paintingId: 3, creatorId: 33, ownerId: 333, title: 'artsy fartsy', image: 'https://www.flickr.com/photos/sarahjohnston/5130007088/', price: 300}
 ]
}

var expectedPaintings = {
 paintings: [
  {paintingId: 1, creatorId: 11, ownerId: 111, title: 'depressed', image: 'https://www.flickr.com/photos/imagomundiphoto/25636563386/', price: 100},
  {paintingId: 2, creatorId: 22, ownerId: 222, title: 'disturbed', image: 'https://www.flickr.com/photos/imagomundiphoto/25636574156/', price: 200},
  {paintingId: 3, creatorId: 33, ownerId: 333, title: 'artsy fartsy', image: 'https://www.flickr.com/photos/sarahjohnston/5130007088/', price: 300},
  {paintingId: 4, creatorId: 44, ownerId: 444, title: 'I am new', image: 'https://www.flickr.com/photos/imagomundiphoto/25032203254/', price: 400}
 ]
}

function addNewPainting(paintingsSample, newPainting) {
    var newPaintingId = paintingsSample.paintings.length + 1
    newPainting.paintingId = newPaintingId
    paintingsSample.paintings.push(newPainting)
    return paintingsSample
}

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


