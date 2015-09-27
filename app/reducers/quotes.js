function quotes (state = [], action) {
  switch (action.type) {
  case 'ADD_QUOTE':
    return [...state, action.quote];
  default:
    return state;
  }
}

module.exports = quotes;
