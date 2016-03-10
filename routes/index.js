var express = require('express');
var router = express.Router();

/* GET all paintings. */
router.get('/', function(req, res, next) {
  res.send('great art at naffordable prices');
});

module.exports = router;
