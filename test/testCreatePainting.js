var request = require('supertest');
var app = require('../app');
var test = require('tape');

test('get status code 200 from /v1/createPainting/:paintingId', function(t) {
  request(app)
    .get('/v1/paintings/:paintingId/1')
    .expect(200)
    .end(function(err, res) {
      t.false(err, 'no error for false')
      t.true(res.body.hasOwnProperty('paintings'), 'res.body.paintings returns an object with the matching paintingId')
      t.equal(res.body.length, 7, "returns all paintings")
      t.end()
    })
})

// test('create a new painting', function(t){
//   t.deepEqual(addNewPainting(paintingsSample, newPainting), expectedPaintings, 'The new painting has been added with a paintingId greater than the largest paintingId')
//   t.end()
// })

// var newPainting = {
//   paintingId: 4, creatorId: 44, ownerId: 444, title: 'I am new', imageUrl: 'https://www.flickr.com/photos/imagomundiphoto/25032203254/', price: 40000
// }

// var paintingsSample = {
//   paintings: [
//     { paintingId: 1, creatorId: 11, ownerId: 111, title: 'depressed', imageUrl: 'https://www.flickr.com/photos/imagomundiphoto/25636563386/', price: 5 },
//     { paintingId: 2, creatorId: 22, ownerId: 222, title: 'disturbed', imageUrl: 'https://www.flickr.com/photos/imagomundiphoto/25636574156/', price: 20 },
//     { paintingId: 3, creatorId: 33, ownerId: 333, title: 'artsy fartsy', imageUrl: 'https://www.flickr.com/photos/sarahjohnston/5130007088/', price: 300 }
//  ]}

// var expectedPaintings = {
//   paintings: [
//     { paintingId: 1, creatorId: 11, ownerId: 111, title: 'depressed', imageUrl: 'https://www.flickr.com/photos/imagomundiphoto/25636563386/', price: 5 },
//     { paintingId: 2, creatorId: 22, ownerId: 222, title: 'disturbed', imageUrl: 'https://www.flickr.com/photos/imagomundiphoto/25636574156/', price: 20 },
//     { paintingId: 3, creatorId: 33, ownerId: 333, title: 'artsy fartsy', imageUrl: 'https://www.flickr.com/photos/sarahjohnston/5130007088/', price: 300 },
//     { paintingId: 4, creatorId: 44, ownerId: 444, title: 'I am new', imageUrl: 'https://www.flickr.com/photos/imagomundiphoto/25032203254/', price: 40000 }
//   ]
// }

// function addNewPainting(paintingsSample, newPainting) {
//   var newPaintingId = paintingsSample.paintings.length + 1
//   newPainting.paintingId = newPaintingId
//   paintingsSample.paintings.push(newPainting)
//   return paintingsSample
// }

/*

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

