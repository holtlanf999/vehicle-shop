var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
		mongoose = require('mongoose'),
		morgan = require('morgan'),
		jwt = require('jsonwebtoken'),
		config = require('./config.js');

		port = process.env.PORT || 4001;

mongoose.connect(config.database + config.userRoute);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(morgan('dev'));

var userRoute = require('./routes/user.route.js')(app);

app.listen(port, function () {
   console.log('USER listening on port', port);
});