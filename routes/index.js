var express = require('express');
var router = express.Router();
const axios = require('axios')

/* GET home page. */
router.get('/', async (req, res, next) => {
  const movies = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=2c6dfda27285e553ec344b86b3f6c92d')
  res.render('index', { title: 'Express', data: movies.data.results });
});

module.exports = router;
