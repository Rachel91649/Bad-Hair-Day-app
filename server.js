// REQUIREMENTS
var express = require('express');
var app = express();
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var port = process.env.PORT || 3000;


// MIDDLEWARE
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride(function(req, res){
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    var method = req.body._method;
    delete req.body._method;
    return method;
  }
}));




// DATABASE
var db = process.env.MONGODB_URI || "mongodb://localhost/bad-hair-day";
mongoose.connect(db);


// CONTROLLERS
// var hairController = require('./controllers/hair.js');
// app.use('/hair', hairController);

// var seedController = require('./controllers/seed.js');
// app.use('/seed', seedController);

// LISTEN
app.listen(port);
console.log("=============================");
console.log("Server is running with  Andre"+port);
console.log("=============================");