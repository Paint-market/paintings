var express = require('express');
var router = express.Router();
var fs = require('fs')
//var findByTitle = require('findByTitle.js')


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
  if(searchParams.length ===0){
    paintingResults = paintings
  }

  else {
    //search database by search params
    paintings.paintings.forEach(function(painting){//loop through each object in array
      if(painting[searchParams]=== Number(req.query[searchParams])){
        paintingResults.push(painting)
      }
      else if(painting.title === req.query[searchParams]){
        paintingResults.push(painting)
      }
     })

    }

     if(paintingResults.length == 0){
        res.status(404).send("painting not found, please check filter options")
      }
      else{  
        res.json(paintingResults);
      }
  })
});

module.exports = router;

