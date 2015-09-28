const React = require('react');
const Quote = require('./quote');

class QuoteList extends React.Component {
  render () {
    return (
      <ul className="quotes">
        {this.props.quotes.map((quote) =>
          <Quote quote={quote} />
        ).reverse()}
      </ul>
    );
  }
}

module.exports = QuoteList;
