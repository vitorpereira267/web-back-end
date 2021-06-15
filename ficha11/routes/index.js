var express = require('express');
var indexController = require('../controllers/indexController')
var router = express.Router();
var jwt = require("jsonwebtoken");

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function (req, res) {
  res.render('login.ejs', { message: req.flash("loginMessage") }); // load the index.ejs file
});

router.get('/signup', function (req, res) {
  res.render('signup.ejs', { message: req.flash("signupMessage") }); // load the index.ejs file
});

router.get('/profile', authenticateTokenFromSession, function (req, res) {
  res.render('profile.ejs', { user: req.user }); // get the user out of session and pass to template
});

router.post('/login', indexController.login)

router.post('/signup', indexController.signup)

function authenticateTokenFromSession(req, res, next) {
  const token = req.session.token
  if (token == null) return res.sendStatus(401)
  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    if (err)
      return res.sendStatus(403)
    req.user = user
    next();
  })
}

module.exports = router;