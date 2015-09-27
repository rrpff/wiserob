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
)

app.get('/random', function (req, res) {
  res.status(200).json('hello!');
});

module.exports = app;
