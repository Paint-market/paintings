var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var routes = require('./routes/v1/paintings');
var users = require('./routes/users');
var paintings = require('./routes/v1/paintings');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);
app.use('/v1/users', users);
app.use('/v1/paintings', paintings);

module.exports = app;
