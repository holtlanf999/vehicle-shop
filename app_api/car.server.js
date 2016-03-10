var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');
    
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/vshopDB/cars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var carRoute = require('./routes/car.route.js')(app);

app.listen(4002, function () {
   console.log('CARS listening on port 4002');
});