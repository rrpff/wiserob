const { createStore, combineReducers } = require('redux');
const quotes = require('../reducers/quotes');

const reducers = combineReducers({ quotes });

module.exports = createStore(reducers);
