var express = require('express');
var router = express.Router();

/* GET list of spaces */
router.get('/spaces', function(req, res, next) {
  res.render('spaces/index', { title: 'Space listings' });
});

/* GET list a space */
router.get('/spaces/new', function(req, res, next) {
  res.render('spaces/new', { title: 'List a space' });
});

/* POST list a space */
router.post('/spaces', function(req, res, next) {
    // params / DM database save equivalent needed
  res.redirect('/spaces');
});

/* GET view specific space - need to work out how to align this with database */
router.get('/spaces/:space', function(req, res, next) {
  res.render('spaces', { title: 'Specific space needs coding' });
});

/* POST request specific space */
router.post('/spaces/:space', function(req, res, next) {
  res.redirect('/requests');
});

module.exports = router;
