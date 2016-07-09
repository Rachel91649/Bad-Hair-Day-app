// =============================
//	REQUIREMENTS
// =============================
var express = require('express');
var mongoose = require('mongoose');
var db = process.env.MONGODB_URI || "mongodb://localhost/bad-hair-day";
var router = express.Router();
var Good = require('../models/goodday.js');


// =============================
//	GOOD HAIR DAY IMAGE ROUTE
// =============================
router.get('/:id', function(req, res){
	console.log("=======================");
	console.log("testing goodday route");
	console.log("=======================");
	console.log("goods is goods_id "+ req.params.id);
	Good.findById(req.params.id, function(err, good){
		if(err) {
			console.log(err);
		}
		res.json(good);
	});
});

//How can I display a random image:
//1. loop over all the images and push the urls into an empty array
//2. shuffle the array of urls
//3. use the 1st image of the array
//	# should I do this on the front end or back end??? #

module.exports = router;