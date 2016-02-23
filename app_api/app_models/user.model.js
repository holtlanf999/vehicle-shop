var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: {
    type: String,
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
  age: {
    type: Number,
    require: true
  },
  password: {
    type: String,
    required: true
  }
});

var userModel = mongoose.model('User', UserSchema);
module.export = userModel;