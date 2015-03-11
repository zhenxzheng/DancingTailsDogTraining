var Mongoose = require('mongoose');

var MessageSchema = new Mongoose.Schema({
  // fields are defined here
  	owner: String,
  	phone: String,
	email: String,
	dog: String,
	breed: String,
	age: String,
	date: {
		full: Date,
		date: String,
		time: String
	},
	message: [String],
	how: String,
	starred: {type:Boolean, default:false}
});

exports.Message = Mongoose.model('Message', MessageSchema);