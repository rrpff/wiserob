const React = require('react');
const QuoteList = require('./quote-list');

class QuotePage extends React.Component {
  render () {
    return (
      <article>
        <QuoteList quotes={this.props.quotes} />
      </article>
    );
  }
}

module.exports = QuotePage;
