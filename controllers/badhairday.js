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
router.get('/', function(req, res){
	// console.log("=======================");
	// console.log("testing badday route");
	// console.log("=======================");
	// console.log("goods is bads_id "+ req.params.id);
	// Bad.findById(req.params.id, function(err, bad){
	// 	if(err) {
	// 		console.log(err);
	// 	}
	// 	res.json(bad);
	// });
	Bad.find({}, function(err, bad){
		if(err) {
			console.log(err);
		}
		res.json(bad)
	});
});

// =============================
//	new image
// =============================
// ** Need to test via postman ** \\ ---->>> Tested 7/9/16 @4:24pm via postman
//create a new bad image by sending the new data that is found in the body and creating a new image
//if there is an error, console.log err and respond with status 500 - end
router.post('/', function(req, res){
	Bad.create(req.body, function(err, bad){
		if(err){
			console.log(err);
			res.status(500).end();
		}
		res.send(true);
	});
});

// =============================
//	update image
// =============================
// ** Need to test via postman ** \\ ---->>> Tested 7/9/16 @4:24pm via postman
//find by Id and update the image by the parameters found in the body
//if there is an error, console.log err
router.put('/:id/edit', function(req, res){
	console.log("====================");
	console.log(" EDIT ROUTE WORKING");
	console.log("====================");
	Bad.findByIdAndUpdate(req.params.id, {image: req.body.image}, function(err, bad){
		if (err) {
			console.log(err)
		}
	});
});

// =============================
//	delete image
// =============================
// not sure if I can test this via postman --need to google this when I get home
//find bad image by id and remove it from the database
// if there is an error, console.log(err)
router.delete('/:id', function(req, res){
	Bad.findByIdAndRemove(req.params.id, function(err, bad){
		if (err){
			console.log(err);
		}
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
