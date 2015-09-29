function quotes (state = '', action) {
  switch (action.type) {
  case 'QUOTE_REPLACE':
    return action.quote;
  default:
    return state;
  }
}

module.exports = quotes;
