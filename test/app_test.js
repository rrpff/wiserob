var test = require('supertest');
var app = require('../app/app');

describe('GET /random', function () {
  it('should return a random piece of wisdom', function (done) {
    test(app).get('/random')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200, done);
  });
});
