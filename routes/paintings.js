var express = require('express');
var router = express.Router();
var fs = require('fs')



/* GET paintings */
router.get('/', function(req, res, next) {
  //read in object from database
  fs.readFile('DB.json', 'utf8', function(err, data){
  var fileObj = JSON.parse(data)

  //create object to hold returned items
  var paintingResults = {}
  var searchParams = ['creatorId']

  //if no search filter passed in return all paintings 
  if(searchParams ===[]){
    paintingResults = fileObj
  }
 else{
    //search database by search params
    paintingResults = fileObj
  console.log(paintingResults.paintings[1].creatorId, "******")

  }

  res.json(paintingResults);
  })
});

module.exports = router;

