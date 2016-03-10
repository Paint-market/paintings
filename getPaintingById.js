var bodyParser = require('body-parser');
var debug = require('debug');
var express = require('express');
var fs = require('fs');
var morgan = require('morgan');

// var routes = require('')
// var user = require ('')

var app = express()

// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use('/v1/paintings', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});






