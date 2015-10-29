var express = require('express');
var util = require('util'); // for string formatting

var router = express.Router();

'use strict';

var excuses = {
  "beans" : "a can of baked beans landed on my big toe",
  "swimming" : "I was swimming too fast and smacked my head on the poolside",
  "bitten" : "I’ve been bitten by an insect",
  "handbrake" : "my car handbrake broke and it rolled down the hill into a lamp post",
  "dog" : "my dog has had a big fright and I don’t want to leave him",
  "hamster" : "my hamster has died",
  "injured" : "I’ve injured myself during sex",
  "slipped" : "I slipped on a coin",
  "sleepless" : "I’ve had a sleepless night",
  "mum" : "my mum has died",
  "hallucinating" : "I am hallucinating",
  "stuck" : "I am stuck in my house because the door’s broken",
  "bit" : "my new girlfriend bit me in a delicate place",
  "burned" : "I burned my hand on the toaster",
  "shoes" : "the dog ate my shoes",
  "fish" : "my fish is sick",
  "spirit" : "I swallowed white spirit",
  "toe" : "my toe is trapped in the bath tap",
  "tongue" : "I’m in A&E as I got a clothes peg stuck on my tongue",
  "sleep" : "I drank too much and fell asleep on someone’s floor – I don’t know where I am",
  "split" : "my trousers split on the way to work",
  "eyes" : "I’m using a new contact lens solution and my eyes are watering",
  "nose" : "I have a blocked nose",
  "hair" : "I’ve had a hair dye disaster",
  "finger" : "I’ve got a sore finger"
};

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

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Sickie as a service", excuses: excuses });
});

/* GET illness */
router.get('/:sickie/:recipient/:sender', function(req, res, next) {
  var excuse = excuses[req.params.sickie];

  // If excuse exists
  if (excuse !== undefined) {
    var message = util.format(
      "Hey %s, %s so I won't be able to come in",
       req.params.recipient, excuse
    );
    var subtitle = util.format("- %s", req.params.sender);

    FormatOutput(res, message, subtitle);
  } else {
    // Throw 404 if no excuse exists
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  }
});

module.exports = router;
