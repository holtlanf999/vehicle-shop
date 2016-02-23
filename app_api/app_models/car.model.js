var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CarSchema = new Schema({
  brand: {
    type: String,
    required: true,
  },
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
  doors: {
    type: Number,
    required: true,
  },
  driveTrain: String,
  engineDisplacement: {
    type: Number,
    required: true,
  },
  engineType: String,
  extras: {
    type: String
  },
  fuelType: {
    type: String,
    required: true,
  },
  images: Array,
  layout: String,
  mileage: {
    type: Number,
    required: true,
  },
  brandModel: {
    type: String,
    required: true
  },
  modifications: {
    type: String
  },
  plate: {
   type: Number,
   unique: true 
  },
  powerOutput: Number,
  price: {
    type: Number,
    required: true
  },
  rebuilt: Boolean,
  sellerId: Number,
  sellerName: String,
  transmition: String,
  year: {
    type: Number,
    required: true
  }
});

var carModel = mongoose.model('Car', CarSchema);
module.exports = carModel;