/*dependencies*/
var express = require('express'),
		app = express(),
		bodyParser = require('body-parser'),
		mongoose = require('mongoose');

mongoose.connect('mongodb:localhost/car');

/*middlewares*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

var carRoutes = require('./routes/car.route.js');

var server = app.listen(4003, function () {
	console.log('server running at http://127.0.0.1:4003/');
});