const React = require('react/addons');
const CSSTransitionGroup = React.addons.CSSTransitionGroup;
const Quote = require('./quote');

class QuoteList extends React.Component {
  render () {
    return (
      <ul className="quotes">
        <CSSTransitionGroup transitionName="quote">
          {this.props.quotes.map((quote, index) =>
            <Quote quote={quote} key={index} />
          ).reverse()}
        </CSSTransitionGroup>
      </ul>
    );
  }
}

module.exports = QuoteList;
