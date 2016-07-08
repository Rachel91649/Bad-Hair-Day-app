// ==========================
// REQUIREMENTS
// ==========================
var mongoose = require('mongoose');


// ==========================
// MODEL SCHEMA
// ==========================
var BadSchema = mongoose.Schema({
	image: String
});


// ==========================
// ROUTE IT OUT FAM!!
// ==========================

var Bad = mongoose.model('Bad', BadSchema);
module.exports = Bad;