// =============================
//	REQUIREMENTS
// =============================
var express = require('express');
var mongoose = require('mongoose');
var db = process.env.MONGODB_URI || "mongodb://localhost/bad-hair-day";
var router = express.Router();
var Good = require('../models/goodday.js');



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

module.exports = router;