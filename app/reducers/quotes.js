function quotes (state = '', action) {
  switch (action.type) {
  case 'REPLACE_QUOTE':
    return action.quote;
  default:
    return state;
  }
}

module.exports = quotes;
