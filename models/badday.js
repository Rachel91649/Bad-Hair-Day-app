// ==========================
// REQUIREMENTS
// ==========================
var mongoose = require('mongoose');


// ==========================
// MODEL SCHEMA
// ==========================
var GoodSchema = mongoose.Schema({
	image_url: String
});


// ==========================
// ROUTE IT OUT FAM!!
// ==========================

var Good = mongoose.model('Good', GoodSchema);
module.exports = Good;