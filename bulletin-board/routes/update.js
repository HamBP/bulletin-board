var express = require('express');
var router = express.Router();

var mysql = require('mysql2');
var secret = require('../public/javascripts/secret');

var client = mysql.createConnection({
  user: 'root',
  password: secret.password,
  database: 'board'
});

router.get('/:id', function(req, res, next) {
    console.log('update : an article was loaded.');

    var id = req.params.id;

    client.query(`select * from articles where _id=${id}`, function (err, result, fields) {
        console.log(result);
        res.render('update', {title: '수정하기', article: result[0]});
    });
});

router.post('/:id', function(req, res, next) {
    console.log('update : an article was modified.');
    var body = req.body;
    var id = req.params.id;

    console.log(body.title);
    client.query('update articles set title=?, content=? where _id=?', [body.title, body.content, id], function () {
        res.redirect('/');
    });
});

module.exports = router;
