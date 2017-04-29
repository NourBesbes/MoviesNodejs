var Actor = require('../models/actor.js');
var Movie = require('../models/movie.js');

module.exports = {

  getAll: function(req, res, next) {
                res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
// Request methods you wish to allow
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

// Request headers you wish to allow
res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
// Set to true if you need the website to include cookies in the requests sent
// to the API (e.g. in case you use sessions)
res.setHeader('Access-Control-Allow-Credentials', true);
    Actor.find(function(err, actors) {
      if (err) return res.status(400).json(err);
      res.status(200).json(actors);
    });
  },


  createOne: function(req, res, next) {
                res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
// Request methods you wish to allow
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

// Request headers you wish to allow
res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
// Set to true if you need the website to include cookies in the requests sent
// to the API (e.g. in case you use sessions)
res.setHeader('Access-Control-Allow-Credentials', true);
    Actor.create(req.body, function(err, actor) {
      if (err) return res.status(400).json(err);

      res.status(201).json(actor);
    });
  },



   getOne: function(req, res, next) {
                 res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
// Request methods you wish to allow
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

// Request headers you wish to allow
res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
// Set to true if you need the website to include cookies in the requests sent
// to the API (e.g. in case you use sessions)
res.setHeader('Access-Control-Allow-Credentials', true);
    Actor.findOne({ id: req.params.id })
    .populate('movies')
    .exec(function(err, actor) {
      if (err) return res.status(400).json(err);
      if (!actor) return res.status(404).json();

      res.status(200).json(actor);
    });
  },


  updateOne: function(req, res, next) {
                res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
// Request methods you wish to allow
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

// Request headers you wish to allow
res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
// Set to true if you need the website to include cookies in the requests sent
// to the API (e.g. in case you use sessions)
res.setHeader('Access-Control-Allow-Credentials', true);
    Actor.findOneAndUpdate({ id: req.params.id }, req.body, function(err, actor) {
      if (err) return res.status(400).json(err);
      if (!actor) return res.status(404).json();

      res.status(200).json(actor);
    });
  },


  deleteOne: function(req, res, next) {
                res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
// Request methods you wish to allow
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

// Request headers you wish to allow
res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
// Set to true if you need the website to include cookies in the requests sent
// to the API (e.g. in case you use sessions)
res.setHeader('Access-Control-Allow-Credentials', true);
    Actor.findOneAndRemove({ id: req.params.id }, function(err) {
      if (err) return res.status(400).json(err);

      res.status(204).json();
    });
  },


  addMovie: function(req, res, next) {
                res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
// Request methods you wish to allow
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

// Request headers you wish to allow
res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
// Set to true if you need the website to include cookies in the requests sent
// to the API (e.g. in case you use sessions)
res.setHeader('Access-Control-Allow-Credentials', true);
    Actor.findById(req.params.id, function(err, actor) {
      if (err) return res.status(400).json(err);
      if (!actor) return res.status(404).json();

      Movie.findById(req.body.id , function(err, movie) {
        if (err) return res.status(400).json(err);
        if (!movie) return res.status(404).json();

        actor.movies.push(movie);
        actor.save(function(err) {
          if (err) return res.status(500).json(err);

          res.status(201).json(actor);
        });
      })
    });
  },


  deleteMovie: function(req, res, next) {
                res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
// Request methods you wish to allow
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

// Request headers you wish to allow
res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
// Set to true if you need the website to include cookies in the requests sent
// to the API (e.g. in case you use sessions)
res.setHeader('Access-Control-Allow-Credentials', true);
    Actor.findOne({ id: req.params.id }, function(err, actor) {
      if (err) return res.status(400).json(err);
      if (!actor) return res.status(404).json();

      // HACK TO CHANGE
      actor.movies = [];
      actor.save(function(err) {
        if (err) return res.status(400).json(err);

        res.status(204).json(actor);
      })
    });
  }

};
