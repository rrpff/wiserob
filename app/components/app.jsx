const React = require('react');
const QuotePage = require('./quotes/quote-page');
const { connect } = require('react-redux');
const { replaceQuote } = require('../actions/quotes');

class App extends React.Component {
  componentDidMount () {
    this.props.dispatch(replaceQuote());
  }

  render () {
    return (
      <div className="wrapper"
           tabIndex="0"
           onClick={e => this.handleClick(e)}
           onKeyDown={e => this.handleKey(e)}>
        <div className="centerWrapper">
          <QuotePage quote={this.props.quotes} />
        </div>
      </div>
    );
  }

  handleClick (e) {
    if (this.props.onClick) this.props.onClick();
    this.props.dispatch(replaceQuote());
  }

  handleKey (e) {
    let validKeys = [13, 32];
    let validKeyPress = validKeys.indexOf(e.keyCode) > -1;

    if (validKeyPress) {
      e.preventDefault();
      this.props.dispatch(replaceQuote());
    }
  }
}

module.exports = connect(state => state)(App);
