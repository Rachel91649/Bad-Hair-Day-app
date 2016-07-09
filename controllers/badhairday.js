// =============================
//	REQUIREMENTS
// =============================
var express = require('express');
var mongoose = require('mongoose');
var db = process.env.MONGODB_URI || "mongodb://localhost/bad-hair-day";
var router = express.Router();
var Bad = require('../models/badday.js');


// =============================
//	ROUTES
// =============================
//need route to loop through Bad hair collection and return randomly selected image if the humidity is >= a specified percentage and display on screen(ajax call on front end will handle that)
router.get('/:id', function(req, res){
	console.log("=======================");
	console.log("testing badday route");
	console.log("=======================");
	console.log("goods is bads_id "+ req.params.id);
	Bad.findById(req.params.id, function(err, bad){
		if(err) {
			console.log(err);
		}
		res.json(bad);
	});
});







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
