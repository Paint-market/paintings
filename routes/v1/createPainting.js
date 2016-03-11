var express = require('express');
var paintings = require('./paintings')
var addNewPainting = require('../addNewPainting')
var router = express.Router();

/* POST new painting */
router.post('/v1/paintings', function(req, res, next) {
  res.json(paintings);
});

module.exports = router;

