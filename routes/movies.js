var express = require('express');
var router = express.Router();
var moviesCtrl = require('../controllers/movies');

// GET /movies/new
router.get('/new', moviesCtrl.new);
router.get('/', moviesCtrl.index);
router.post('/', moviesCtrl.create)

module.exports = router;
