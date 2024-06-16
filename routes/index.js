var express = require('express');
var router = express.Router();

const movies = require('../controllers/movieController')

const axios = require('axios')

/* GET home page. */
router.get('/', async (req, res, next) => {
  const movies = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=2c6dfda27285e553ec344b86b3f6c92d')
  res.render('index', { title: 'Express', data: movies.data.results });
});

router.post('/order', movies.orderTicket)
router.get('/list-order', movies.list)
router.get('/list-movie', movies.listMovies);

module.exports = router;
