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
//need route to loop through Good hair collection and return randomly selected image if the humidity is <= a specified percentage and display on screen(ajax call on front end will handle that)
router.get('/', function(req, res){
	// console.log("=======================");
	// console.log("testing goodday route");
	// console.log("=======================");
	// console.log("goods is goods_id "+ req.params.id);
	// Good.findById(req.params.id, function(err, good){
	// 	if(err) {
	// 		console.log(err);
	// 	}
	// 	res.json(good);
	// });
	Good.find({}, function(err, good){
		if(err) {
			console.log(err);
		}
		var image = [];
		for (var i = 0; i < good.length; i++){
			image.push(good[i].image);
		}
		var shuffle = function(o) {//function shuffles. i = the length of my deck; j returns a random index number in the deck. the card in that index number is located and switches places with index[0]. This continues until the process has iterated through the entire length of the deck.
			for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
				return o;
		};
		shuffle(image);
		console.log("===================");
		console.log("this is image array");
		// console.log(good[i].image);
		console.log(image);
		console.log(image[0]);
		console.log("===================");
		res.json(good);
	});
});

//How can I display a random image:
//1. loop over all the images and push the urls into an empty array
//2. shuffle the array of urls
//3. use the 1st image of the array
//	# should I do this on the front end or back end??? #

module.exports = router;