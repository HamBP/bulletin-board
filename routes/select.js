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
    var id = req.params.id;

    client.query(`select * from articles where _id=${id}`, function (err, result, fields) {
        console.log(`request select _id=${id}`);

        res.render('select', {title: '글 읽기', article: result[0]});

        var views = result[0].views + 1;
        client.query(`update articles set views = ${views} where _id=${id}`);
    })
});

module.exports = router;
