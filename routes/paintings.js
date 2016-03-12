var express = require('express');
var router = express.Router();
var fs = require('fs')



/* GET paintings */
router.get('/', function(req, res, next) {
  //read in object from database
  fs.readFile('DB.json', 'utf8', function(err, data){
  var fileObj = JSON.parse(data)
  console.log(fileObj, "***")

  //create object to hold returned items
  var paintingResults = {}
  var searchParams
  console.log(searchParams, "params")

  //if no search filter passed in return all paintings 
  if(searchParams ===undefined){
    paintingResults = fileObj
  }
  else{

  }

  res.json(paintingResults);
  })
});

module.exports = router;

