process.env.NODE_ENV = 'test';

var chai = require('chai');
var expect = require('chai').expect
var chaiHttp = require('chai-http');
var app = require('../app');


chai.use(chaiHttp);


describe('page status codes testing', function() {
  it('should respond with 404', function(done) {
    chai.request(app)
    .get('/not_a_page')
    .end(function(err, res) {
        // res.should.have.status(404);
        expect(res).to.have.status(404);
      done();
    });
  });

  it('should respond with 200', function(done) {
    chai.request(app)
    .get('/')
    .end(function(err, res) {
        // res.should.have.status(200);
        expect(res).to.have.status(200);
      done();
    });
  });



});
