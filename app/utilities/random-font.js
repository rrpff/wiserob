const fonts = require('../../config/fonts.json');
const head = document.getElementsByTagName('head')[0];

function makeStylesheet (href) {
  let link = document.createElement('link');
  link.href = href;
  link.rel = 'stylesheet';
  link.type = 'text/css';

  return link;
}

function getFontStylesheetHref (font) {
  return `https://fonts.googleapis.com/css?family=${font.replace(/\s+/, '+')}`;
}

module.exports = function () {
  let font = fonts[Math.floor(Math.random() * fonts.length)];

  return {
    name: font,
    load () {
      let href = getFontStylesheetHref(font);
      let stylesheet = makeStylesheet(href);
      head.appendChild(stylesheet);

      return font;
    },
  };
};
