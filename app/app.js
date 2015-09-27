var express = require('express');
var Wisdom = require('./lib/wisdom');
var app = express();

var wiserob = Wisdom(
  [
    'To be'
  ],
  [
    'not to be'
  ]
);

app.get('/', function (req, res) {
  res.status(200).json(wiserob());
});

app.get('/random', function (req, res) {
  res.status(200).json({
    quote: wiserob()
  });
});

module.exports = app;
