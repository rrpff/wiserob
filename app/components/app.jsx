const React = require('react');
const QuotePage = require('./quotes/quote-page');
const { connect } = require('react-redux');
const { addQuote } = require('../actions/quotes');

class App extends React.Component {
  componentDidMount () {
    this.props.dispatch(addQuote());
  }

  render () {
    return (
      <div className="wrapper"
           tabIndex="0"
           onClick={e => this.handleClick(e)}
           onKeyDown={e => this.handleKey(e)}>
        <QuotePage quotes={this.props.quotes} />
      </div>
    );
  }

  handleClick (e) {
    if (this.props.onClick) this.props.onClick();
    this.props.dispatch(addQuote());
  }

  handleKey (e) {
    let validKeys = [13, 32];
    let validKeyPress = validKeys.indexOf(e.keyCode) > -1;

    if (validKeyPress) {
      e.preventDefault();
      this.props.dispatch(addQuote());
    }
  }
}

module.exports = connect(state => state)(App);
