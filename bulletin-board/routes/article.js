var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/create', function(req, res, next) {
    fs.readFile('./views/writing_article.html', 'utf8', function(err, data) {
        res.send(data);
    });
});

router.post('/create', function(req, res, next) {
    console.log("!!!");
    res.redirect('/');
});

module.exports = router;
