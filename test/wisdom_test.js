const expect = require('chai').expect;
const Wisdom = require('../utilities/wisdom');

describe('Wisdom', function () {
  it('should return a function which spouts strings of wisdom', function () {
    let wisdom = Wisdom(['to be happy'], ['to be healthy']);
    expect(wisdom()).to.be.a('string');
  });

  it('the returned function should give a random quote when called', function () {
    let wisdom = Wisdom(['to be happy'], ['to be healthy', 'to be unhealthy']);
    let possibilities = ['to be happy is to be healthy', 'to be happy is to be unhealthy'];
    expect(possibilities).to.include(wisdom());
  });
});
