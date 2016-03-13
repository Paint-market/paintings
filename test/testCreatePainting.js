var test = require('tape');
var request = require('supertest');
var app = require('../app');
var addNewPainting = require('../addNewPainting')

test('create a new painting', function(t){
  // Clarified the test message in this test - Dominic
  t.deepEqual(addNewPainting(paintingsSample, newPainting), expectedPaintings, 'New painting added with a paintingId 1 greater than the previous largest paintingId in the collection')
  t.end()
})

var newPainting = {
  paintingId: 199 , creatorId: 44, ownerId: 444, title: 'I am new', imageUrl: 'https://www.flickr.com/photos/imagomundiphoto/25032203254/', price: 40000
}

var paintingsSample = {
  paintings: [
    { paintingId: 1, creatorId: 11, ownerId: 111, title: 'depressed', imageUrl: 'https://www.flickr.com/photos/imagomundiphoto/25636563386/', price: 5 },
    { paintingId: 2, creatorId: 22, ownerId: 222, title: 'disturbed', imageUrl: 'https://www.flickr.com/photos/imagomundiphoto/25636574156/', price: 20 },
    { paintingId: 3, creatorId: 33, ownerId: 333, title: 'artsy fartsy', imageUrl: 'https://www.flickr.com/photos/sarahjohnston/5130007088/', price: 300 }
 ]}

var expectedPaintings = {
  paintings: [
    { paintingId: 1, creatorId: 11, ownerId: 111, title: 'depressed', imageUrl: 'https://www.flickr.com/photos/imagomundiphoto/25636563386/', price: 5 },
    { paintingId: 2, creatorId: 22, ownerId: 222, title: 'disturbed', imageUrl: 'https://www.flickr.com/photos/imagomundiphoto/25636574156/', price: 20 },
    { paintingId: 3, creatorId: 33, ownerId: 333, title: 'artsy fartsy', imageUrl: 'https://www.flickr.com/photos/sarahjohnston/5130007088/', price: 300 },
    { paintingId: 4, creatorId: 44, ownerId: 444, title: 'I am new', imageUrl: 'https://www.flickr.com/photos/imagomundiphoto/25032203254/', price: 40000 }
  ]
}

test('get status code 200 for posting a new painting', function(t) {
  request(app)
    .post('/v1/paintings')
    .send(newPainting)
    .expect(200)
    .end(function(err, res) {
      t.false(err, 'no error for false')
      t.true(res.body.hasOwnProperty('paintingId'), 'Test if painting object property is in res.body.') //Changed this line - Dominic
      t.deepEqual(res.body.imageUrl, newPainting.imageUrl, "returns new painting added")
      t.end()
    })
})





