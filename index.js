require('dotenv').config();
var express = require('express');
var ejsLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var app = express();
var multer = require('multer');
var upload = multer({ dest: './uploads/' });
var read = require('read-file');

app.set('view engine', 'ejs');

app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(ejsLayouts);
app.use(express.static('static'));

app.get('/', function(req, res) {
  res.render('index');
});

// app.post('/', function(req, res) {
//   res.render('index');
// });

app.post('/', upload.single('myFile'), function(req, res) {
  // async
  read(req.file.path, 'utf8', function(err, buffer) {
    console.log("file contents:", buffer);
    res.render('graph', {contents: buffer});
  });
});


app.listen(process.env.PORT || 3000);
