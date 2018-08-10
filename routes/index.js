var express = require('express');
var router = express.Router();
var app = express();
/* GET home page. */


app.get('/', function(req, res, next) {
  res.render('index');
});

app.get('/queue', function(req, res, next) {
  res.render('queue');
});
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = app;
