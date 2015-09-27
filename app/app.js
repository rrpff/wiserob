const express = require('express');
const app = express();
const wiserob = require('./services/wiserob');

app.get('/', function (req, res) {
  res.status(200).json(wiserob());
});

app.get('/random', function (req, res) {
  res.status(200).json({
    quote: wiserob(),
  });
});

module.exports = app;
