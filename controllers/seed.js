// =============================
//	REQUIREMENTS
// =============================
var express = require('express');
var mongoose = require('mongoose');
var db = process.env.MONGODB_URI || "mongodb://localhost/bad-hair-day";
var router = express.Router();
var Goods = require('../models/goodday.js');
var Bads = require('../models/badday.js');

// =============================
//	SEED ROUTE AND DATA
// =============================

router.get('/', function(req, res){

	var good1 = new Good({
		image: "http://i.imgur.com/vwH65HZ.png"
	});

	var good2 = new Good({
		image: "http://i.imgur.com/SXI2yTa.png"
	});
	
	var good3 = new Good({
		image: "http://i.imgur.com/SGIijs6.png"
	});

	var good4 = new Good({
		image: "http://i.imgur.com/V12cG8J.png"
	});

	var good5 = new Good({
		image: "http://i.imgur.com/qPF0U6t.png"
	});

	var good6 = new Good({
		image: "http://i.imgur.com/mAZOwHQ.png"
	});

	var good7 = new Good({
		image: "http://i.imgur.com/s5j9EKU.png"
	});

	var good8 = new Good({
		image: "http://i.imgur.com/qucSKTg.png"
	});

	var good9 = new Good({
		image: "http://i.imgur.com/4SH0Rr1.png"
	});

	var good10 = new Good({
		image: "http://i.imgur.com/odXRHZn.png"
	});

	var bad1 = new Bad({
		image: "http://i.imgur.com/Nx3Vixz.png"
	});

	var bad2 = new Bad({
		image: "http://i.imgur.com/XHDrK3V.png"
	});

	var bad3 = new Bad({
		image: "http://i.imgur.com/jy33FOC.png"
	});

	var bad4 = new Bad({
		image: "http://i.imgur.com/GiqmnBA.png"
	});

	var bad5 = new Bad({
		image: "http://i.imgur.com/JpqRPZA.png"
	});

	var bad6 = new Bad({
		image: "http://i.imgur.com/7Ekz3lZ.png"
	});

	var bad7 = new Bad({
		image: "http://i.imgur.com/zSNABjk.png"
	});

	var bad8 = new Bad({
		image: "http://i.imgur.com/rfA2vZ5.png"
	});

	var bad9 = new Bad({
		image: "http://i.imgur.com/9qQnuRX.png"
	});

	var bad10 = new Bad({
		image: "http://i.imgur.com/MBvlP9a.png"
	});

	var bad11 = new Bad({
		image: "http://i.imgur.com/W0IgbcE.png"
	});

	good1.save();
	good2.save();
	good3.save();
	good4.save();
	good5.save();
	good6.save();
	good7.save();
	good8.save();
	good9.save();
	good10.save();
	bad1.save();
	bad2.save();
	bad3.save();
	bad4.save();
	bad5.save();
	bad6.save();
	bad7.save();
	bad8.save();
	bad9.save();
	bad10.save();
	bad11.save();

	console.log("======================");
	console.log("You Reap What You Sow");
	console.log("======================");

});












module.exports = router;