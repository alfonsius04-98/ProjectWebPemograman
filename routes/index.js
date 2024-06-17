var express = require('express');
var router = express.Router();
const axios = require('axios')
const movie = require('../controllers/movieController')

/* GET home page. */
router.get('/', async (req, res, next) => {
  const movies = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=2c6dfda27285e553ec344b86b3f6c92d')
  // if (req.session.user === undefined) {
  //   res.redirect('/users/login')
  // }
  res.render('index', { title: 'Express', data: movies.data.results});
});

router.post('/order', movie.order)
router.get('/list-order', movie.listOrder)
router.post('/update', movie.updateOrder)

module.exports = router;
