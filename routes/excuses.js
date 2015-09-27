var express = require('express');
var util = require('util'); // for string formatting

var router = express.Router();

'use strict';

/* Formats output as requested */
function FormatOutput(res, message, subtitle) {
  res.format({
    "text/plain": function() {
        return res.send(util.format("%s %s", message, subtitle));
    },
    "application/json": function() {
        return res.send(JSON.stringify({ message: message, subtitle: subtitle }, null, 3));
    },
    "text/html": function() {
        return res.render('sickie', { message: message, subtitle: subtitle });
    },
    "application/xml": function() {
        return res.render('xml', { message: message, subtitle: subtitle });
    }
  });
}

/* GET default illness. */
router.get('/:name/:illness', function(req, res, next) {
  var message = util.format("Mate, %s.", req.params.illness);
  var subtitle = util.format("- %s", req.params.name);

  FormatOutput(res, message, subtitle);
});

/* GET illness stub example. */
router.get('/days/:name/:illness', function(req, res, next) {
  var message = util.format("Mate, %s for days.", req.params.illness);
  var subtitle = util.format("- %s", req.params.name);

  FormatOutput(res, message, subtitle);
});

module.exports = router;
