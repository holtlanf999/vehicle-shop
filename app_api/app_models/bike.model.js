var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BikeSchema = new Schema({
  brand: {
    type: String,
    required: true,
  },
  brandModel: {
    type: String,
    required: true
  },
  bodyType: String,
  category: {
    type: String,
    required: true,
  },
  color: String,
  comments: String,
  condition: {
    type: String,
    required: true,
  },
  dateCreated: Date,
  engineDisplacement: {
    type: Number,
    required: true,
  },
  engineType: String,
  extras: {
    type: String
  },
  images: Array,
  mileage: {
    type: Number,
    required: true,
  },
  modifications: {
    type: String
  },
  plate: {
   type: String,
   unique: true 
  },
  powerOutput: Number,
  price: {
    type: Number,
    required: true
  },
  rebuilt: Boolean,
  sellerId: String,
  sellerName: String,
  transmition: String,
  year: {
    type: Number,
    required: true
  }
});

var bikeModel = mongoose.model('Bike', BikeSchema);
module.exports = bikeModel;