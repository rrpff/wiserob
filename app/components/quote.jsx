const React = require('react');

class Quote extends React.Component {
  render () {
    return (
      <section className="card">
        {this.props.quote}
      </section>
    );
  }
}

module.exports = Quote;
