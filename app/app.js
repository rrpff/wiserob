const Path = require('path');
const express = require('express');
const app = express();
const wiserob = require('./services/wiserob');

app.use(express.static(Path.join(__dirname, 'static')));

app.get('/random', function (req, res) {
  res.status(200).json({
    quote: wiserob(),
  });
});

app.get('/random.txt', function (req, res) {
  res.status(200).send(wiserob());
});

module.exports = app;
