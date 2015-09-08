var express = require('express');
var util = require('util'); // for string formatting

var router = express.Router();

'use strict';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sickie as a service' });
});

module.exports = router;
