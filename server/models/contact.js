var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var ContactSchema = new mongoose.Schema({
	first_name: String,
	last_name: String,
	picture: {type: String, default: '/images/test.jpg'},
 	created_at: { type: Date, default: Date.now },
	hidden: Boolean
});
mongoose.model('Contact', ContactSchema);