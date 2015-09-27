const wiserob = require('../services/wiserob');

function addQuote () {
  return {
    type: 'ADD_QUOTE',
    quote: wiserob(),
  };
};

exports.addQuote = addQuote;
