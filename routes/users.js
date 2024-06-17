var express = require('express');
var router = express.Router();
const user = require('../controllers/userController')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/register-page', (req, res) => {
  res.render('register', { title: 'Register' })
})
router.get('/login-page', (req, res, next) => {
  res.render('login', { title: 'Login' });
});
router.post('/register', user.register)
router.post('/login', user.login)

module.exports = router;
