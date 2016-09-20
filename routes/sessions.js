var express = require('express');
var router = express.Router();

/* GET sign in page */
router.get('/sessions/new', function(req, res, next) {
  res.render('sessions/new');
});

/* POST sign in page */
router.post('/sessions', function(req, res, next) {
  // if user exists assign user id to session
  res.redirect('/spaces');
  // else flash error
  res.redirect('sessions/new');
});

// session end code goes here with goodbye

module.exports = router;
