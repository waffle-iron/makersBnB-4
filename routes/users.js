var express = require('express');
var router = express.Router();

/* GET sign up page */
router.get('/users/new', function(req, res, next) {
  // instantiate new user code goes here
  res.send('respond with a resource');
});

/* POST sign up page form */
router.post('/users', function(req, res, next) {
  // if user can be saved code goes here
  res.redirect('/spaces');
  // else flash error code goes here
});

module.exports = router;
