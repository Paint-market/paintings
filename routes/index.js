var express = require('express');
var router = express.Router();

var paintings = {
  paintings: [
 { paintingId: 1, creatorId: 11, ownerId: 111, title: 'depressed', image: 'https://www.flickr.com/photos/imagomundiphoto/25636563386/', price: 5 },
{ paintingId: 2, creatorId: 22, ownerId: 222, title: 'disturbed', image: 'https://www.flickr.com/photos/imagomundiphoto/25636574156/', price: 20 },
{ paintingId: 3, creatorId: 33, ownerId: 333, title: 'artsy fartsy', image: 'https://www.flickr.com/photos/sarahjohnston/5130007088/', price: 300 },
{ paintingId: 4, creatorId: 1, ownerId: 1, title: 'Pixel', image: 'www.google.com/paintings', price: 55 },
{ paintingId: 5, creatorId: 2, ownerId: 2, title: 'Pixel v Vector', image: 'www.google.com/paintings2', price: 5 },
{ paintingId: 7, creatorId: 3, ownerId: 3, title: 'Vector', image: 'www.google.com/paintings3', price: 10},
{ paintingId: 8, creatorId: 2, ownerId: 1, title: 'Pixel2', image: 'www.google.com/paintings', price: 10}
  ]
}

/* GET all paintings. */
router.get('/', function(req, res, next) {
  res.send(paintings.paintings);
});

module.exports = router;

// /* GET all paintings. */
// router.get('/', function(req, res, next) {
//   res.send('great art at affordable prices for average people');
// });

// module.exports = router;

