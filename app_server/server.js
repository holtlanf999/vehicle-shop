/*dependencies*/
var http = require('http'),
		express = require('express'),
		app = express(),
		bodyParser = require('body-parser');

/*middlewares*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/server');

var server = app.listen(4000, function () {
	console.log('server running at http://127.0.0.1:4000/');
});