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

    // month | day < 10 일 때 앞에 0 붙이기
    var month = new Date().getMonth() + 1 < 10 ? '0' + (new Date().getMonth() + 1) : new Date().getMonth();
    var day = new Date().getDate() < 10 ? '0' + new Date().getDate() : new Date().getDate();
    var date = month + '-' + day;

    client.query('insert into articles (title, nickname, date, content) values (?, ?, ?, ?)', 
    [body.title, '익명', date, body.content], function () {
        res.redirect('/');
    });
});

module.exports = router;
