const React = require('react');

class Quote extends React.Component {
  render () {
    return (
      <li>{this.props.quote}</li>
    );
  }
}

module.exports = Quote;
