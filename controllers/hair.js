// =============================
//	REQUIREMENTS
// =============================
var express = require('express');
var mongoose = require('mongoose');
var db = process.env.MONGODB_URI || "mongodb://localhost/bad-hair-day";
var router = express.Router();
var Good = require('../models/goodday.js');
var Bad = require('../models/badday.js');


// =============================
//	ROUTES
// =============================
//need route to loop through Good hair collection and return randomly selected image if the humidity is <= a specified percentage and display on screen(ajax call on front end will handle that)
//need route to loop through Bad hair collection and return randomly selected image if the humidity is >= a specified percentage and display on screen(ajax call on front end will handle that)


//need a route to create new good and bad hair day images
//they can be created via post man
//need a route to update an existing good/bad hair day image
//can be done via postman
//need a route to delete an existing good/bad hair day image
//can be done via postman???


// =============================
//	API CALL
// =============================

//need route to weather api

module.exports = router;
