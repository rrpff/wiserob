const React = require('react');
const Quote = require('./quote');

class QuotePage extends React.Component {
  render () {
    return (
      <article>
        <Quote quote={this.props.quote} />
      </article>
    );
  }
}

module.exports = QuotePage;
