var express = require('express'),
	app = express(),
	bodyParser = require('body-parser');
		
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

var mainRoute = require('./routes/main.route.js')(app);

var server = app.listen(4000, function () {
	console.log('MAIN Server is running at 127.0.0.1:4000/');
});