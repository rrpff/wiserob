module.exports = function makeStylesheet (href) {
  let link = document.createElement('link');
  link.href = href;
  link.rel = 'stylesheet';
  link.type = 'text/css';

  return link;
};
