var express = require('express');
var util = require('util'); // for string formatting

var router = express.Router();

'use strict';

var excuses = {
  beans : "a can of baked beans landed on my big toe",
  swimming : "I was swimming too fast and smacked my head on the poolside",
  bitten : "I’ve been bitten by an insect",
  handbrake : "my car handbrake broke and it rolled down the hill into a lamp post",
  dog : "my dog has had a big fright and I don’t want to leave him",
  hamster : "my hamster has died",
  injured : "I’ve injured myself during sex",
  slipped : "I slipped on a coin",
  sleepless : "I’ve had a sleepless night",
  mum : "my mum has died",
  hallucinating : "I am hallucinating",
  stuck : "I am stuck in my house because the door’s broken",
  bit : "my new girlfriend bit me in a delicate place",
  burned : "I burned my hand on the toaster",
  shoes : "the dog ate my shoes",
  fish : "my fish is sick",
  spirit : "I swallowed white spirit",
  toe : "my toe is trapped in the bath tap",
  tongue : "I’m in A&E as I got a clothes peg stuck on my tongue",
  sleep : "I drank too much and fell asleep on someone’s floor – I don’t know where I am",
  split : "my trousers split on the way to work",
  eyes : "I’m using a new contact lens solution and my eyes are watering",
  nose : "I have a blocked nose",
  hair : "I’ve had a hair dye disaster",
  finger : "I’ve got a sore finger"
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

/* GET illness stub */
router.get('/beans/:recipient/:sender', function(req, res, next) {
  var message = util.format("Hey %s, %s so I won't be able to come in", req.params.recipient, excuses.beans);
  var subtitle = util.format("- %s", req.params.sender);

  FormatOutput(res, message, subtitle);
});

/* GET illness stub */
router.get('/swimming/:recipient/:sender', function(req, res, next) {
  var message = util.format("Hey %s, %s so I won't be able to come in", req.params.recipient, excuses.swimming);
  var subtitle = util.format("- %s", req.params.sender);

  FormatOutput(res, message, subtitle);
});

/* GET illness stub */
router.get('/bitten/:recipient/:sender', function(req, res, next) {
  var message = util.format("Hey %s, %s so I won't be able to come in", req.params.recipient, excuses.bitten);
  var subtitle = util.format("- %s", req.params.sender);

  FormatOutput(res, message, subtitle);
});

/* GET illness stub */
router.get('/handbrake/:recipient/:sender', function(req, res, next) {
  var message = util.format("Hey %s, %s so I won't be able to come in", req.params.recipient, excuses.handbrake);
  var subtitle = util.format("- %s", req.params.sender);

  FormatOutput(res, message, subtitle);
});

/* GET illness stub */
router.get('/dog/:recipient/:sender', function(req, res, next) {
  var message = util.format("Hey %s, %s so I won't be able to come in", req.params.recipient, excuses.dog);
  var subtitle = util.format("- %s", req.params.sender);

  FormatOutput(res, message, subtitle);
});

/* GET illness stub */
router.get('/hamster/:recipient/:sender', function(req, res, next) {
  var message = util.format("Hey %s, %s so I won't be able to come in", req.params.recipient, excuses.hamster);
  var subtitle = util.format("- %s", req.params.sender);

  FormatOutput(res, message, subtitle);
});

/* GET illness stub */
router.get('/injured/:recipient/:sender', function(req, res, next) {
  var message = util.format("Hey %s, %s so I won't be able to come in", req.params.recipient, excuses.injured);
  var subtitle = util.format("- %s", req.params.sender);

  FormatOutput(res, message, subtitle);
});

/* GET illness stub */
router.get('/slipped/:recipient/:sender', function(req, res, next) {
  var message = util.format("Hey %s, %s so I won't be able to come in", req.params.recipient, excuses.slipped);
  var subtitle = util.format("- %s", req.params.sender);

  FormatOutput(res, message, subtitle);
});

/* GET illness stub */
router.get('/sleepless/:recipient/:sender', function(req, res, next) {
  var message = util.format("Hey %s, %s so I won't be able to come in", req.params.recipient, excuses.sleepless);
  var subtitle = util.format("- %s", req.params.sender);

  FormatOutput(res, message, subtitle);
});

/* GET illness stub */
router.get('/mum/:recipient/:sender', function(req, res, next) {
  var message = util.format("Hey %s, %s so I won't be able to come in", req.params.recipient, excuses.mum);
  var subtitle = util.format("- %s", req.params.sender);

  FormatOutput(res, message, subtitle);
});

/* GET illness stub */
router.get('/hallucinating/:recipient/:sender', function(req, res, next) {
  var message = util.format("Hey %s, %s so I won't be able to come in", req.params.recipient, excuses.hallucinating);
  var subtitle = util.format("- %s", req.params.sender);

  FormatOutput(res, message, subtitle);
});

/* GET illness stub */
router.get('/stuck/:recipient/:sender', function(req, res, next) {
  var message = util.format("Hey %s, %s so I won't be able to come in", req.params.recipient, excuses.stuck);
  var subtitle = util.format("- %s", req.params.sender);

  FormatOutput(res, message, subtitle);
});

/* GET illness stub */
router.get('/bit/:recipient/:sender', function(req, res, next) {
  var message = util.format("Hey %s, %s so I won't be able to come in", req.params.recipient, excuses.bit);
  var subtitle = util.format("- %s", req.params.sender);

  FormatOutput(res, message, subtitle);
});

/* GET illness stub */
router.get('/burned/:recipient/:sender', function(req, res, next) {
  var message = util.format("Hey %s, %s so I won't be able to come in", req.params.recipient, excuses.burned);
  var subtitle = util.format("- %s", req.params.sender);

  FormatOutput(res, message, subtitle);
});

/* GET illness stub */
router.get('/shoes/:recipient/:sender', function(req, res, next) {
  var message = util.format("Hey %s, %s so I won't be able to come in", req.params.recipient, excuses.shoes);
  var subtitle = util.format("- %s", req.params.sender);

  FormatOutput(res, message, subtitle);
});

/* GET illness stub */
router.get('/fish/:recipient/:sender', function(req, res, next) {
  var message = util.format("Hey %s, %s so I won't be able to come in", req.params.recipient, excuses.fish);
  var subtitle = util.format("- %s", req.params.sender);

  FormatOutput(res, message, subtitle);
});

/* GET illness stub */
router.get('/spirit/:recipient/:sender', function(req, res, next) {
  var message = util.format("Hey %s, %s so I won't be able to come in", req.params.recipient, excuses.spirit);
  var subtitle = util.format("- %s", req.params.sender);

  FormatOutput(res, message, subtitle);
});

/* GET illness stub */
router.get('/toe/:recipient/:sender', function(req, res, next) {
  var message = util.format("Hey %s, %s so I won't be able to come in", req.params.recipient, excuses.toe);
  var subtitle = util.format("- %s", req.params.sender);

  FormatOutput(res, message, subtitle);
});

/* GET illness stub */
router.get('/tongue/:recipient/:sender', function(req, res, next) {
  var message = util.format("Hey %s, %s so I won't be able to come in", req.params.recipient, excuses.tongue);
  var subtitle = util.format("- %s", req.params.sender);

  FormatOutput(res, message, subtitle);
});

/* GET illness stub */
router.get('/sleep/:recipient/:sender', function(req, res, next) {
  var message = util.format("Hey %s, %s so I won't be able to come in", req.params.recipient, excuses.sleep);
  var subtitle = util.format("- %s", req.params.sender);

  FormatOutput(res, message, subtitle);
});

/* GET illness stub */
router.get('/split/:recipient/:sender', function(req, res, next) {
  var message = util.format("Hey %s, %s so I won't be able to come in", req.params.recipient, excuses.split);
  var subtitle = util.format("- %s", req.params.sender);

  FormatOutput(res, message, subtitle);
});

/* GET illness stub */
router.get('/eyes/:recipient/:sender', function(req, res, next) {
  var message = util.format("Hey %s, %s so I won't be able to come in", req.params.recipient, excuses.eyes);
  var subtitle = util.format("- %s", req.params.sender);

  FormatOutput(res, message, subtitle);
});

/* GET illness stub */
router.get('/nose/:recipient/:sender', function(req, res, next) {
  var message = util.format("Hey %s, %s so I won't be able to come in", req.params.recipient, excuses.nose);
  var subtitle = util.format("- %s", req.params.sender);

  FormatOutput(res, message, subtitle);
});

/* GET illness stub */
router.get('/hair/:recipient/:sender', function(req, res, next) {
  var message = util.format("Hey %s, %s so I won't be able to come in", req.params.recipient, excuses.hair);
  var subtitle = util.format("- %s", req.params.sender);

  FormatOutput(res, message, subtitle);
});

/* GET illness stub */
router.get('/finger/:recipient/:sender', function(req, res, next) {
  var message = util.format("Hey %s, %s so I won't be able to come in", req.params.recipient, excuses.finger);
  var subtitle = util.format("- %s", req.params.sender);

  FormatOutput(res, message, subtitle);
});

module.exports = router;
