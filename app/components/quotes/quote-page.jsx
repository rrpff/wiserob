const React = require('react');
const QuoteList = require('./quote-list');
const { addQuote } = require('../actions/quotes');
const { connect } = require('react-redux');

class QuotePage extends React.Component {
  render () {
    return (
      <article>
        <QuoteList quotes={this.props.quotes} />
      </article>
    );
  }
}

module.exports = connect(state => state)(QuotePage);
