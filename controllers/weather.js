// =============================
//	REQUIREMENTS
// =============================
var express = require('express');
var mongoose = require('mongoose');
var db = process.env.MONGODB_URI || "mongodb://localhost/bad-hair-day";
var router = express.Router();
var Good = require('../models/goodday.js');

//This is where I will put the weather api call

//not sure if I will need require the good/bad models in this controller --dont see why I would need to at this point

//ajax calls on the frontend will handle talking to my backend routes

module.exports = router;