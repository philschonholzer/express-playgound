var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  var visits;
  if (req.session.page_views) {
    req.session.page_views++;
    visits = "You visited this page " + req.session.page_views + " times";
  } else {
    req.session.page_views = 1;
    visits = "Welcome to this page for the first time!";
  }
  res.render('index', { title: 'Express', visit: visits });
});

module.exports = router;
