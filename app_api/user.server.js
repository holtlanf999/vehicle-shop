var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');
    
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/vshopDB/pusers');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var userRoute = require('./routes/user.route.js')(app);

app.listen(4001, function () {
   console.log('USER listening on port 4001');
});