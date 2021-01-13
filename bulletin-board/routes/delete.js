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
    // TODO : 글 삭제하려는 사람 권한 : 작성자 or 관리자만 가능하도록 변경할 것.

    var id = req.params.id;

    console.log(`request delete : _id = ${id}`);
    client.query(`delete from articles where _id = ${id}`, function (err, result, fields) {
        res.redirect('/');
    });
});

module.exports = router;
