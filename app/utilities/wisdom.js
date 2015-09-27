function pick (array) {
  return array[Math.floor(Math.random() * array.length)];
}

module.exports = function (left, right) {
  return function wisdom () {
    return `${pick(left)} is ${pick(right)}`;
  };
};
