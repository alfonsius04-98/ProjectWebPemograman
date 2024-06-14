var express = require('express');
var router = express.Router();
const axios = require('axios')

/* GET home page. */
router.get('/', async (req, res, next) => {
  const test = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=0fbe3dc01cd368614ceb64fe4ba06e32')
  // console.log(test.data)
  const movies = test.data.results
  res.render('index', { title: 'Express', movies });
});

module.exports = router;
