const React = require('react');

class Quote extends React.Component {
  render () {
    return (
      <section className="quote">
        {this.props.quote}
      </section>
    );
  }
}

module.exports = Quote;
