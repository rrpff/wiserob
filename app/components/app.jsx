const React = require('react');
const QuotePage = require('./quotes/quote-page');
const { connect } = require('react-redux');

class App extends React.Component {
  render () {
    return (
      <div className="wrapper">
        <QuotePage quotes={this.props.quotes} />
      </div>
    );
  }
}

module.exports = connect(state => state)(App);
