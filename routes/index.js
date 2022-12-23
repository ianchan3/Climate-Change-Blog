var express = require('express');
var router = express.Router();
const passport = require("passport");


router.get('/', function(req, res, next) {
  res.render('homepages/index');
});

router.get('/', function(req, res, next) {
  res.render('ocean.mp4');
});

router.get('/auth/google', passport.authenticate(
  'google',
  {
    scope: ['profile', 'email'],
    prompt: 'select_account'
  }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/',
    failureRedirect: '/'
  }
));

router.get('/logout', function(req, res) {
  req.logout(function(err) {
    res.redirect('/');
  });
});

module.exports = router;
