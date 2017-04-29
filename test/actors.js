process.env.NODE_ENV = 'test';

//Require the dev-dependencies
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app.js');
var should = chai.should();

chai.use(chaiHttp);
//Our parent block
describe('Actors', () => {

  /*
   * Test the /GET route
   */
    describe('/GET actor', () => {
        it('it should GET all the articles', (done) => {
            chai.request(server)
                .get('/api/actors')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                });
        });
    });

});
