//load environment variables
var dotenv = require('dotenv');
dotenv.load();

//add youtube api setup
var youtube = require('youtube-api');
youtube.authenticate({
	type: "key",
	key: process.env.youtube_api_key
});

exports.youtube = youtube;