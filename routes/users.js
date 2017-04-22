var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient

var db

MongoClient.connect('mongodb://'+ process.env.DB_USER +':'+ process.env.DB_PASS +'@ds015325.mlab.com:15325/botfabrik-conhit', (err, database) => {
  if (err) return console.log(err)
  db = database
})

var users = {};

/* GET users listing. */
router.get('/', function(req, res, next) {
  db.collection('persons').find().toArray(function(err, results) {
    console.log(results)
    // send HTML file populated with quotes here
    var renderObject = { users: results, formatedUsers: JSON.stringify(results)}
    res.render('user', renderObject );
  })
});

router.post('/', function(req, res, next) {
  db.collection('persons').save({_id: req.body._id, user: req.body}, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')

  })

  res.redirect('/users');
})

module.exports = router;
