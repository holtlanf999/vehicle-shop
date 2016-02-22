/*dependencies*/
var	express = require('express'),
		app = express(),
		bodyParser = require('body-parser');

/*middlewares*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

var vehicleRoutes = require('./routes/vehicles.route.js');

var server = app.listen(4000, function () {
	console.log('server running at http://127.0.0.1:4000/');
});