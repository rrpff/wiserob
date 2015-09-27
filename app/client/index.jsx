const React = require('react');
const { Provider } = require('react-redux');
const QuotePage = require('../components/quote-page');
const store = require('./store');

let wrapper = document.getElementsByClassName('wrapper')[0];

React.render(
  <Provider store={store}>
    {() => <QuotePage />}
  </Provider>,
  wrapper
);
