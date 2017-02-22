require('dotenv').config();
var express = require('express');
var ejsLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var db = require('./models');
var app = express();

app.set('view engine', 'ejs');

app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(ejsLayouts);
app.use(express.static('static'));

app.get('/', function(req, res) {
  res.render('index');
});

app.post('/', function(req, res) {
  res.render('index');
});

app.listen(process.env.PORT || 3000);
