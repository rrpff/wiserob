const React = require('react');
const { Provider } = require('react-redux');
const App = require('../components/app');
const store = require('./store');

let wrapper = document.getElementsByClassName('wrapper')[0];

React.render(
  <Provider store={store}>
    {() => <App />}
  </Provider>,
  wrapper
);
