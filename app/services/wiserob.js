const Wisdom = require('../utilities/wisdom');

module.exports = Wisdom(
  require('../../config/quotes/left.json'),
  require('../../config/quotes/right.json'),
);
