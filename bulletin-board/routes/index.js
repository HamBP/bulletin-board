var express = require('express');
var router = express.Router();

var mysql = require('mysql2');
var secret = require('../public/javascripts/secret');

var client = mysql.createConnection({
  user: 'root',
  password: secret.password,
  database: 'board'
});

/* GET home page. */
router.get('/', function(req, res, next) {
  client.query('select * from articles', function(err, result, fields) {
    console.log(result[0]);
  });
  res.render('index', data, function(err, view) {
    console.log(data);
  });
  //res.render('index', { title: '게시판' });
});

module.exports = router;
