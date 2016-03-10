var express = require('express');
var router = express.Router();

var paintings = {
  paintings: [
 { paintingId: 1, creatorId: 1, ownerId: 1, title: 'Pixel', image: 'www.google.com/paintings', price: 55 },
 { paintingId: 2, creatorId: 2, ownerId: 2, title: 'Pixel v Vector', image: 'www.google.com/paintings2', price: 5 },
 { paintingId: 3, creatorId: 3, ownerId: 3, title: 'Vector', image: 'www.google.com/paintings3', price: 10}
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

