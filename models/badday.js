// ==========================
// REQUIREMENTS
// ==========================
var mongoose = require('mongoose');


// ==========================
// MODEL SCHEMA
// ==========================
var BadSchema = mongoose.Schema({
	image_url: String
});


// ==========================
// ROUTE IT OUT FAM!!
// ==========================

var Bad = mongoose.model('Bad', BadSchema);
module.exports = Bad;