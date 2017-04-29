var express = require('express');
var router = express.Router(); 
var app = express();
var actors = require('../controllers/actors');
var Actor = require('../models/actor');
var movies = require('../controllers/movies');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
// Actors routes
router.get('/actors', actors.getAll);
router.route('/actors').post(actors.createOne);
router.route('/actors/:id').get(actors.getOne);
//app.post('/actors/:id/movies', actors.addMovie);
router.route('/actors/:id/movies').post(actors.addMovie);
router.route('/actors/:id/movies/:mid').delete( actors.deleteMovie);

// Movies routes
router.get('/movies', movies.getAll);
router.route('/movies').post(movies.createOne);
router.route('/movies/:id').get(movies.getOne);
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.route('/movies/:id/actors').post( movies.addActor);
router.route('/movies/:id/actors/:mid').delete(movies.deleteActor);


module.exports = router;
