var test = require('tape');
var addNewPainting = require('../addNewPainting')

test('create a new painting', function(t){
  t.deepEqual(addNewPainting(paintingsSample, newPainting), expectedPaintings, 'The new painting has been added with a paintingId greater than the largest paintingId')
  t.end()
})

var newPainting = {
  paintingId: 4, creatorId: 44, ownerId: 444, title: 'I am new', imageUrl: 'https://www.flickr.com/photos/imagomundiphoto/25032203254/', price: 40000
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




