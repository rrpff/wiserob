const React = require('react');
const randomFont = require('../../utilities/random-font');

class Quote extends React.Component {
  render () {
    let font = randomFont();
    font.load();

    return (
      <section className="quote" style={{ fontFamily: font.name }}>
        {this.props.quote}
      </section>
    );
  }
}

module.exports = Quote;
