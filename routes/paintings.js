var express = require('express');
var router = express.Router();
var fs = require('fs')



/* GET paintings */
router.get('/', function(req, res, next) {
  //read in object from database
  fs.readFile('DB.json', 'utf8', function(err, data){
  var paintings = JSON.parse(data)

  //create object to hold returned items
  var paintingResults = []
  var searchParams = Object.keys(req.query)


  

  //if no search filter passed in return all paintings 
  if(searchParams ===[]){
    paintingResults = paintings
  }
 else if(searchParams ==='title'){
  //title search requires special consideration
    
  }
  else {
    //search database by search params
    paintings.paintings.forEach(function(painting){
      if(painting.creatorId===11){
      paintingResults.push(painting)
    }
     })
    console.log(paintingResults)
  }
  res.json(paintingResults);
  })
});

module.exports = router;

