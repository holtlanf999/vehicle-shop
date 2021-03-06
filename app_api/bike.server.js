var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
		morgan = require('morgan'),
		jwt = require('jsonwebtoken'),
		config = require('./config.js');
    
var mongoose = require('mongoose'),
		port = process.env.PORT || 4003;
mongoose.connect(config.database + config.bikeRoute);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(morgan('dev'));

var bikeRoute = require('./routes/bike.route.js')(app);

app.listen(port, function () {
   console.log('BIKE listening on port', port);
});