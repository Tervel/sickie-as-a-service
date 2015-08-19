var express = require('express');
var util = require('util'); // for string formatting

var router = express.Router();

'use strict';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET default illness. */
router.get('/:name/:illness', function(req, res, next) {
  var name = util.format("Mate, %s.", req.params.name);
  var illness = util.format("- %s", req.params.illness);
  var output = util.format("%s %s", name, illness);

  res.render('sickie', { message: output });
  // res.send(output);
});

/* GET illness stub example. */
router.get('/days/:name/:illness', function(req, res, next) {
  var name = util.format("Mate, %s for days.", req.params.name);
  var illness = util.format("- %s", req.params.illness);
  var output = util.format("%s %s", name, illness);

  res.send(output);
});

module.exports = router;
