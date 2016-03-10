var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(paintings);
});

// var paintings = {
//   paintings: [
//     { paintingId: 1, creatorId: 11, ownerId: 111, title: 'depressed', image: 'https://www.flickr.com/photos/imagomundiphoto/25636563386/', price: 5 },
//     { paintingId: 2, creatorId: 22, ownerId: 222, title: 'disturbed', image: 'https://www.flickr.com/photos/imagomundiphoto/25636574156/', price: 20 },
//     { paintingId: 3, creatorId: 33, ownerId: 333, title: 'artsy fartsy', image: 'https://www.flickr.com/photos/sarahjohnston/5130007088/', price: 300 }
//   ]
// }

// app.get('/cats/new', function(req, res) {
//  res.render('catsNew')
// })

// app.post('/cats', function(req,res) {
//   //find all the cat ids, identify the largest and add 1 to get the new id
//   //assign id to new cat details
//   //add completed details to the cat array
//   cats = addNewCat(cats, req.body);
//   res.redirect('/cats')
// })


/*
  // check the request params
  // see if there's a cat for that id
  // if there was ... return that cat object
  // else error ? ...
router.get('/:id', function(req, res, next){
  var cat = cats.cats.find(findCatById)
  function findCatById(cat){
    return cat.id === parseInt(req.params.id)
  }
  if(cat === undefined){
    res.status(404).send('Invalid ID');
  } else {
    res.json(cat)
  }
})
*/
module.exports = router;
