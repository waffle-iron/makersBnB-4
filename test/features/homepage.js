process.env.NODE_ENV = 'test';

var chai = require('chai');
var expect = require('chai').expect
var chaiHttp = require('chai-http');
var app = require('../../app');
var Browser = require('zombie');
var http = require('http');

// chai.use(chaiHttp);
//

describe('page content', function() {

  before(function(){
    this.server = http.createServer(app).listen(3000);
    this.browser = new Browser({ site: 'http://localhost:3000' });
  });

  before(function(done) {
    this.browser.visit('/', done);
  });

  it('should have content Welcome to Express', function(done) {
    done();
  });
});
