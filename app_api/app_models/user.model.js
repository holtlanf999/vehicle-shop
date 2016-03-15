var mongoose = require('mongoose'),
    config = require('../config.js'),
    crypto = require('crypto'),
    jwt = require('jsonwebtoken'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    require: true,
    unique: true
  },
  phone: {
    type: Number,
    require: true,
  },
  password: {
    type: String,
    required: true
  },
  hash: String,
  salt: String
});

UserSchema.methods.setPassword = function (password) {
  this.salt = crypto.ramdomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
};

UserSchema.methods.validPassword = function (password) {
  var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
  console.log(hash);
  return this.hash === hash;
};

UserSchema.methods.generateJwt = function () {
  var expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign({
    _id: this.id, 
    email: this.email,
    userName: this.userName,
    exp: parseInt(expiry.getTime()/1000)
  }, config.secret);
};

var userModel = mongoose.model('User', UserSchema);
module.exports = userModel;