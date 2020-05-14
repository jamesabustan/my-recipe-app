const knex = require('../db/knex');
var chai = require('chai')
  , chaiHttp = require('chai-http');
chai.use(chaiHttp);

const app = require('../app');

describe('recipes', () => {
    before((done ) => {
        //run migrations
        knex.migrate.latest()
        .then(() => {
        //run seeds
        return knex.seed.run();
        }).then(()=> done());
     });
        
     describe('GET /recipe', function() {
        it('should return all recipes', function(done) {
          chai.request(app)
          .get('/recipe')
          .end(function(err, res) {
          res.should.have.status(200);
          res.should.be.json; // jshint ignore:line
          res.body.should.be.a('array');
          res.body.length.should.equal(4);
          res.body[0].should.have.property('name');
          res.body[0].name.should.equal('Sweet & sticky wings with classic slaw');
          res.body[0].should.have.property('cook_time');
          res.body[0].channel.should.equal('50 mins');
          res.body[0].should.have.property('level');
          res.body[0].genre.should.equal('Easy');
          res.body[0].should.have.property('url');
          res.body[0].rating.should.equal('https://www.bbcgoodfood.com/recipes/sweet-sticky-wings-classic-slaw');
          done();
          });
        });
      });


    });
