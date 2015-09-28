const React = require('react');
const Quote = require('./quote');

class QuoteList extends React.Component {
  render () {
    return (
      <ul className="quotes">
        {this.props.quotes.map((quote, index) =>
          <Quote quote={quote} key={index} />
        ).reverse()}
      </ul>
    );
  }
}

module.exports = QuoteList;
