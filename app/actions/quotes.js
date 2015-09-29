const wiserob = require('../services/wiserob');

function replaceQuote () {
  return {
    type: 'REPLACE_QUOTE',
    quote: wiserob(),
  };
};

exports.replaceQuote = replaceQuote;
