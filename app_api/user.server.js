var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
		morgan = require('morgan'),
		jwt = require('jsonwebtoken'),
		config = require('./config');

var mongoose = require('mongoose'),
		port = process.env.PORT || 4001;
mongoose.connect(config.database + userRoute);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(morgan('dev'));

var userRoute = require('./routes/user.route.js')(app);

app.listen(port, function () {
   console.log('USER listening on port', port);
});