var express = require('express');
var router = express.Router();

var mysql = require('mysql2');
var secret = require('../public/javascripts/secret');

var client = mysql.createConnection({
  user: 'root',
  password: secret.password,
  database: 'board'
});

router.get('/', function(req, res, next) {
    res.render('create', {title: '글쓰기'});
});

router.post('/', function(req, res, next) {
    console.log('create : an article written.');
    var body = req.body;

    client.query('insert into articles (title, nickname, date, content) values (?, ?, ?, ?)', 
    [body.title, '익명', '0101', body.content], function () {
        res.redirect('/');
    });
});

module.exports = router;
