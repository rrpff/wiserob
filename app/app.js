const express = require('express');
const Wisdom = require('./lib/wisdom');
const app = express();

const wiserob = Wisdom(
  [
    'To be',
  ],
  [
    'not to be',
  ],
);

app.get('/', function (req, res) {
  res.status(200).json(wiserob());
});

app.get('/random', function (req, res) {
  res.status(200).json({
    quote: wiserob(),
  });
});

module.exports = app;
