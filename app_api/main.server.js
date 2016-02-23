var express = require('express'),
		app = express(),
		bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

var mainRoute = require('./routes/main.route.js')(app);

var server = app.listen(4000, function () {
	console.log('MAIN Server is running at 127.0.0.1:4000/');
});