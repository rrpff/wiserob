const wiserob = require('../services/wiserob');

function replaceQuote () {
  return {
    type: 'QUOTE_REPLACE',
    quote: wiserob(),
  };
};

exports.replaceQuote = replaceQuote;
