var express = require('express');
var router = express.Router();

var question_controller = require('../controllers/questionController');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.redirect(req.originalUrl + '/01');
});

router.get('/result', question_controller.question_results);

router.get('/:id', question_controller.question_get);

router.post('/:id', question_controller.question_post);

module.exports = router;