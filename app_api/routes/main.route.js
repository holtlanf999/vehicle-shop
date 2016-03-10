var r = require('request').defaults({json: true}),
    config = require('../config.js'),
    async = require('async');


module.exports = function (app) {
  
  /*Main Routes*/
  var userServer = config.userServer,
      carServer = config.carServer,
      bikeServer = config.bikeServer;
  /*Read*/
  app.get('/main', function (req, res) {
    async.parallel({
      user: function (callback) {
        r({uri: config.userServer + config.userRoute}, function (error, response, body) {
          if (error) {
            callback({service: 'user', error: error});
            return
          }
          if (!error && response.statusCode === 200) {
            callback(null, body);
          } else {
            callback(response.statusCode);
          }
        });
      },
      car: function (callback) {
        r({uri: config.carServer + config.carRoute}, function (error, response, body) {
          if (error) {
            callback({service: 'car', error: error});
            return
          }
          if (!error && response.statusCode === 200) {
            callback(null, body);
          } else {
            callback(response.statusCode);
          }
        });
      },
      bike: function (callback) {
        r({uri: config.bikeServer + config.bikeRoute}, function (error, response, body) {
          if (error) {
            callback({service: 'bike', error: error});
            return
          }
          if (!error && response.statusCode === 200) {
            callback(null, body);
          } else {
            callback(response.statusCode);
          }
        });
      }
    },
    function (err, results) {
      res.jsonp({
        error: err,
        results: results
      });
    });
  });
}