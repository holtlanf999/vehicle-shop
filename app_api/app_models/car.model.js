var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CarSchema = new Schema({
  carBrand: {
    type: String,
    required: true,
  },
  brandModel: {
    type: String,
    required: true
  },
  bodyType: {
   type: String,
   required: true 
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
  driveTrain: {
    type: String,
    required: true
  },
  engineDisplacement: {
    type: Number,
    required: true,
  },
  engineType: String,
  fuelType: {
    type: String,
    required: true,
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
  seats: {
    type: Number,
    required: true
  },
  sellerId: String,
  sellerName: String,
  transmition: String,
  year: {
    type: Number,
    required: true
  },
  extras: {};
  /*powerSteering: String,
  tintedGlass: String,
  powerMirrors: String,
  ac: String,
  luxuryRims: String,
  halogenLights: String,
  cruiseControl: String,
  esc: String,
  reversingCamera: String,
  steeringWheelControls: String,
  memorySeats: String,
  travelComputer: String,
  rainSensor: String,
  airbags: String,
  alarm: String,
  defroster: String,
  turbo: String,
  reversingSensors: String,
  startButton: String,
  smartKey: String,
  adjustableSteering: String,
  powerSeats: String,
  powerWindows: String,
  absBreaks: String,
  sunroof: String,
  panoramicRoof: String,
  usbAuxRadio: String,
  ldcScreen: String*/
});

var carModel = mongoose.model('Car', CarSchema);
module.exports = carModel;