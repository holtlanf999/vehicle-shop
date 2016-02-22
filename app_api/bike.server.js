/*dependencies*/
var express = require('express'),
		app = express(),
		bodyParser = require('body-parser'),
		mongoose = require('mongoose');

mongoose.connect('mongodb:localhost/bike');

/*middlewares*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

var bikeRoutes = require('./routes/bike.route.js');

var server = app.listen(4001, function () {
	console.log('server running at http://127.0.0.1:4001/');
});