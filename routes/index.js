var express = require('express');
var router = express.Router();
var app = express();
/* GET home page. */


app.get('/', function(req, res, next) {
  res.render('index');
});

app.get('/queue', function(req, res, next) {
  res.render('set-queue/queue');
});
app.get('/queueing', function(req, res, next) {
    res.render('set-queue/queueing');
});
app.get('/appointment', function(req, res, next) {
    res.render('set-queue/appointment');
});
app.get('/Adduser', function(req, res, next) {
    res.render('patients/creatpatients');
});
app.get('/Doctor', function(req, res, next) {
    res.render('Diagnosis/index');
});
app.get('/Doctor/history', function(req, res, next) {
    res.render('Diagnosis/history');
});
app.get('/Doctor/medical_certificate', function(req, res, next) {
    res.render('Diagnosis/medical_certificate');
});
app.get('/examination', function(req, res, next) {
    res.render('Diagnosis/examination');
});


app.get('/queue/information', function(req, res, next) {
  res.render('set-queue/information');
});


app.get('/queue/remedy', function(req, res, next) {
  res.render('set-queue/remedy');
});
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = app;
