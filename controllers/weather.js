// =============================
//	REQUIREMENTS
// =============================
var express = require('express');
var mongoose = require('mongoose');
var request = require('request');
var router = express.Router();
// var openWeather = process.env.OPEN_WEATHER_ID;
var weatherUnderground = process.env.WEATHER_UNDERGROUND_KEY;

//This is where I will put the weather api call

//not sure if I will need require the good/bad models in this controller --dont see why I would need to at this point

//ajax calls on the frontend will handle talking to my backend routes

// router.get('/getweather/:zip', function(req, res){
// 	console.log("====================");
// 	console.log("this is params city:");
// 	console.log("====================");
// 	console.log(req.params.zip);
// 	request("http://api.wunderground.com/api/" + weatherUnderground + "conditions/bestfct/q/" + req.params.zip + .json)
// });



router.get('/currentweather/:state/:city', function(req, res){
	console.log("====================");
	console.log("this is params :city");
	console.log("====================");
  console.log(req.params.city);
  console.log("====================");
	console.log("this is params :state");
	console.log("====================");
  console.log(req.params.state);

  let state = req.params.state;
  let city = req.params.city;
	request(`http://api.wunderground.com/api/${weatherUnderground}/conditions/q/${state}/${city}`, function(error, repsonse, body){
		var weatherData = JSON.parse(body)
		console.log("====================");
		console.log("This is weather Data");
		console.log(weatherData);
		console.log("====================");
		// console.log("This is Humidity from weather data");
		// console.log(weatherData.main.humidity);
		console.log("====================");

		res.json(weatherData)
	});
});


module.exports = router;