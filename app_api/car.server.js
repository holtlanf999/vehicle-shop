var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
		morgan = require('morgan'),
		jwt = require('jsonwebtoken'),
		config = require('./config');
    
var mongoose = require('mongoose'),
	port = process.env.PORT || 4002;
mongoose.connect(config.database, '/cars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var carRoute = require('./routes/car.route.js')(app);

app.listen(port, function () {
   console.log('CARS listening on port 4002');
});