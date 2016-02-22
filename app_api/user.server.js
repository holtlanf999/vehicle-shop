/*dependencies*/
var express = require('express'),
		app = express(),
		bodyParser = require('body-parser'),
		mongoose = require('mongoose');

mongoose.connect('mongodb:localhost/user');

/*middlewares*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

var userRoutes = require('./routes/user.route.js');

var server = app.listen(4002, function () {
	console.log('server running at http://127.0.0.1:4002/');
});