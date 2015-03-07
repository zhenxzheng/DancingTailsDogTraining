var Mongoose = require('mongoose');

var MessageSchema = new Mongoose.Schema({
  // fields are defined here
  	owner: String,
  	phone: String,
	email: String,
	dog: String,
	breed: String,
	age: String,
	date: Date,
	message: String
});

exports.Message = Mongoose.model('Message', MessageSchema);