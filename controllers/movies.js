var Movie = require('../models/movie');
var Actor = require('../models/actor');

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
    Movie.find(function(err, movies) {
      if (err) return res.status(400).json(err);

      res.status(200).json(movies);
    }).populate("actors");
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
    Movie.create(req.body, function(err, movie) {
      if (err) return res.status(400).json(err);

      res.status(201).json(movie);
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
    Movie.findOne({ id: req.params.id })
    .populate('actors')
    .exec(function(err, movie) {
      if (err) return res.status(400).json(err);
      if (!movie) return res.status(404).json();

      res.status(200).json(movie);
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
    Movie.findOneAndUpdate({ id: req.params.id }, req.body, function(err, movie) {
      if (err) return res.status(400).json(err);
      if (!movie) return res.status(404).json();

      res.status(200).json(movie);
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
    Movie.findOneAndRemove({ id: req.params.id }, function(err) {
      if (err) return res.status(400).json(err);

      res.status(204).json();
    });
  },


  addActor: function(req, res, next) {
                res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
// Request methods you wish to allow
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

// Request headers you wish to allow
res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
// Set to true if you need the website to include cookies in the requests sent
// to the API (e.g. in case you use sessions)
res.setHeader('Access-Control-Allow-Credentials', true);
    Movie.findOne({ id: req.params.id }, function(err, movie) {
      if (err) return res.status(400).json(err);
      if (!movie) return res.status(404).json();

      Actor.findOne({ id: req.body.id }, function(err, actor) {
        if (err) return res.status(400).json(err);
        if (!actor) return res.status(404).json();

        movie.actors.push(actor);
        movie.save(function(err) {
          if (err) return res.status(500).json(err);

          res.status(201).json(movie);
        });
      })
    });
  },


  deleteActor: function(req, res, next) {
                res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
// Request methods you wish to allow
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

// Request headers you wish to allow
res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
// Set to true if you need the website to include cookies in the requests sent
// to the API (e.g. in case you use sessions)
res.setHeader('Access-Control-Allow-Credentials', true);
    Movie.findOne({ id: req.params.id }, function(err, movie) {
      if (err) return res.status(400).json(err);
      if (!movie) return res.status(404).json();

      // HACK TO CHANGE
      movie.actors = [];
      movie.save(function(err) {
        if (err) return res.status(400).json(err);

        res.status(204).json(movie);
      })
    });
  }

};

