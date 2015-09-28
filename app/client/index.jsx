const React = require('react');
const { Provider } = require('react-redux');
const App = require('../components/app');
const store = require('./store');

React.render(
  <Provider store={store}>
    {() => <App />}
  </Provider>,
  document.body
);
