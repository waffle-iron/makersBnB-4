var express = require('express');
var router = express.Router();

/* GET requests made and received */
router.get('/requests', function(req, res, next) {
  res.send('respond with a resource');
});

/* POST confirm or deny request  */
router.post('/requests', function(req, res, next) {
    // params / DM database save equivalent needed
  res.redirect('/requests');
});

module.exports = router;
