var express = require('express');
var util = require('util'); // for string formatting

var router = express.Router();

'use strict';

/* Formats output as requested */
function FormatOutput(res, output) {
  res.format({
    "text/plain": function() {
        return res.send(output);
    },
    "application/json": function() {
        return res.send(JSON.stringify({ message: output }, null, 3));
    },
    "text/html": function() {
        return res.render('sickie', { message: output });
    },
    "application/xml": function() {
        return res.render('xml', { message: output });
    }
  });
}

/* GET default illness. */
router.get('/:name/:illness', function(req, res, next) {
  var name = util.format("Mate, %s.", req.params.name);
  var illness = util.format("- %s", req.params.illness);
  var output = util.format("%s %s", name, illness);

  FormatOutput(res, output);
});

/* GET illness stub example. */
router.get('/days/:name/:illness', function(req, res, next) {
  var name = util.format("Mate, %s for days.", req.params.name);
  var illness = util.format("- %s", req.params.illness);
  var output = util.format("%s %s", name, illness);

  FormatOutput(res, output);
});

module.exports = router;
