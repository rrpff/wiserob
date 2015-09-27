const React = require('react');
const Quote = require('../components/quote');
const wiserob = require('../services/wiserob');

React.render(<Quote quote={wiserob()} />, document.body);
