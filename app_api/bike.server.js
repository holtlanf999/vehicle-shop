var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');
    
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/vshopDB/bikes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var bikeRoute = require('./routes/bike.route.js')(app);

app.listen(4003, function () {
   console.log('BIKE listening on port 4003');
});