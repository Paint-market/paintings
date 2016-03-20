var express = require('express');
var router = express.Router();
var fs = require('fs')

var addNewPainting = require('../../addNewPainting')

var paintings = {}

fs.readFile('db.json','utf8', function(err, data){ //load data from db.json
  paintings = JSON.parse(data)

  /* GET all paintings || get all paintings by creatorId*/
  router.get('/', function(req, res, next) {
    var searchResult = searchPaintings(paintings, req.query)

    if (searchResult.paintings.length == 0){
      res.status(404).send('invalid search parameters')
    } else {
      res.json(searchResult)
    }
  });

  function searchPaintings(paintingsObj, query){
    var paintingResult = {}
    var searchParams = Object.keys(query)
    if (searchParams.length === 0){
      paintingResult = paintingsObj
    } else {
      var filteredPaintings = paintingsObj.paintings.filter(function(painting){
        for (var i = 0; i < searchParams.length; i++){
          return painting[searchParams[i]] === Number(query[searchParams[i]])
        }
      })
      paintingResult["paintings"] = filteredPaintings
    }
    return paintingResult
  }

  /* POST new painting */
  router.post('/', function(req, res, next) {
    paintings = addNewPainting(paintings, req.body)

    fs.writeFile('db.json',JSON.stringify(paintings))

    console.log(paintings.paintings[paintings.paintings.length - 1])
    res.json(paintings.paintings[paintings.paintings.length - 1]);
  });

})
module.exports = router;
