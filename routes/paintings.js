var express = require('express');
var router = express.Router();
var fs = require('fs')



/* GET paintings */
router.get('/', function(req, res, next) {
  //read in object from database
  fs.readFile('DB.json', 'utf8', function(err, data){
  var paintings = JSON.parse(data)

  //create object to hold returned results
  var paintingResults = []
  //store search params from query
  var searchParams = Object.keys(req.query)

  //if no search filter passed in return all paintings 
  if(searchParams ===[]){
    paintingResults = paintings
  }
  //if search parameter is title
 else if(searchParams ==='title'){
  //title search requires separate function
    
  }
  else {
    //search database by search params
    paintings.paintings.forEach(function(painting){//loop through each object in array
      console.log(painting[searchParams[0]], '**')
      if(painting[searchParams]===req.query[searchParams]){
      paintingResults.push(painting)

    }
     })
    console.log(paintingResults)
  }
  res.json(paintingResults);
  })
});

module.exports = router;

