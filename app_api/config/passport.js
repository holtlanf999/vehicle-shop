var passport = require('passport'),
		LocalStrategy = require('passport-local').Strategy,
		mongoose = require('mongoose'),
		User = require('../app_models/user.model.js');

passport.use(new LocalStrategy({
		usernameField: 'userName'
	},
	function (username, passport, done) {
		User.findOne({userName}, function (err, user) {
			if (err) {
				return done(err);
			}
			if (!user) {
				return done(null, false, {
					message: 'incorrect username.'
				});
			}
			if (!user.validPassword(password)) {
				return done (null, false, {
					message: 'incorrect password'
				});
			}
			return done(null, user);
		});
	}
));