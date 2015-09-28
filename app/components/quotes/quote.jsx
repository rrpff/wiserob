const React = require('react');

class Quote extends React.Component {
  render () {
    return (
      <li className="quote">
        {this.props.quote}
      </li>
    );
  }
}

module.exports = Quote;
