const React = require('react');
const QuotePage = require('./quotes/quote-page');
const { connect } = require('react-redux');
const { addQuote } = require('../actions/quotes');

class App extends React.Component {
  render () {
    return (
      <div className="wrapper" onClick={e => this.handleClick(e)}>
        <QuotePage quotes={this.props.quotes} />
      </div>
    );
  }

  handleClick (e) {
    if (this.props.onClick) this.props.onClick();
    this.props.dispatch(addQuote());
  }
}

module.exports = connect(state => state)(App);
