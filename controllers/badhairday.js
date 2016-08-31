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

router.get('/badsindex', function(req, res){
	Bad.find({}, function(err, bad){
		res.json(bad);
	});
});
//need route to loop through Bad hair collection and return randomly selected image if the humidity is >= a specified percentage and display on screen(ajax call on front end will handle that)
router.get('/badhair', function(req, res){
	
	Bad.find({}, function(err, bad){
		if(err) {
			console.log(err);
		}
		var images = [];
		for(var i = 0; i < bad.length; i++){
			images.push(bad[i].image);
		}
		var shuffle = function(o) {//function shuffles. i = the length of the collection; j returns a random index number from the collection. the object in that index number is located and switches places with index[0]. This continues until the process has iterated through the entire length of the collection.
			for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
				return o;
		};
		shuffle(images);
		// res.json(bad[0])
		console.log("this is bad-image:");
		console.log("==================");
		console.log(images[0]);
		console.log("==================");
		res.json(images[0]);
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
		var badImage = bad;
		if(err){
			console.log(err);
			res.status(500).end();
		}
		res.send(true);
		// var badImage = bad;
		// console.log("============");
		// console.log(badImage);
		// console.log("============");
		// res.json(badImage);
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
		res.send(true);
	});
});



module.exports = router;

// =========== Scrap Code =========== \\

//need a route to create new good and bad hair day images
//they can be created via post man
//need a route to update an existing good/bad hair day image
//can be done via postman
//need a route to delete an existing good/bad hair day image
//can be done via postman??

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

	// Bad.find({}, function(err, badImage){
	// 	if (err){
	// 		console.log(err);
	// 	}
	// 	res.json(badImage);
	// });

