var expect = require('chai').expect;
var Wisdom = require('../app/lib/wisdom');

describe('Wisdom', function () {
  it('should return a function which spouts strings of wisdom', function () {
    var wisdom = Wisdom(['to be happy'], ['to be healthy']);
    expect(wisdom()).to.be.a('string');
  });

  it('the returned function should give a random quote when called', function () {
    var wisdom = Wisdom(['to be happy'], ['to be healthy', 'to be unhealthy']);
    var possibilities = ['to be happy is to be healthy', 'to be happy is to be unhealthy'];
    expect(possibilities).to.include(wisdom());
  });
});
