var r = require('request').defaults({json: true}),
    config = require('../config');

var async = require('async');

module.exports = function (app) {
  /*Read*/
  app.get('/main', function (req, res) {
    async.parallel({
      user: function (callback) {
        r({uri: 'http://localhost:4001' + config.userRoute}, function (error, response, body) {
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
        r({uri: 'http://localhost:4002' + config.carRoute}, function (error, response, body) {
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
        r({uri: 'http://localhost:4003' + config.bikeRoute}, function (error, response, body) {
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