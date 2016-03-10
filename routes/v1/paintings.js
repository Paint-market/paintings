var express = require('express');
var router = express.Router();

var paintings = {
  "paintings": [
  {
  "paintingId": 1,
  "creatorId": 11,
  "ownerId": 111,
  "title": "depressed",
  "image": "https://www.flickr.com/photos/imagomundiphoto/25636563386/",
  "price": 5
},
{
  "paintingId": 2,
  "creatorId": 22,
  "ownerId": 222,
  "title": "disturbed",
  "image": "https://www.flickr.com/photos/imagomundiphoto/25636574156/",
  "price": 20
},
{
  "paintingId": 3,
  "creatorId": 33,
  "ownerId": 333,
  "title": "artsy fartsy",
  "image": "https://www.flickr.com/photos/ajajajajajajaj/5130007088/",
  "price": 300
},
{
  "paintingId": 7,
  "creatorId": 11,
  "ownerId": 111,
  "title": "Pixel",
  "image": "https://www.flickr.com/photos/abababababbaabbab/51300070000/",
  "price": 55
},
{
  "paintingId": 11,
  "creatorId": 2,
  "ownerId": 666,
  "title": "Pixel v Vector",
  "image": "https://www.flickr.com/photos/uuuuuumememememem/51300072222/",
  "price": 5
},
{
  "paintingId": 50,
  "creatorId": 33,
  "ownerId": 333,
  "title": "Vector",
  "image": "https://www.flickr.com/photos/jjejejjejejejejej/5130066666/",
  "price": 10
},
{
  "paintingId": 8,
  "creatorId": 2,
  "ownerId": 55,
  "title": "Pixel2",
  "image": "https://www.flickr.com/photos/yuyouyouyou/51300123123/",
  "price": 10}
  ]
}

/* GET all paintings. */
router.get('/', function(req, res, next) {
  res.json(paintings);
});

module.exports = router;

