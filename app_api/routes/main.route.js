var request = require('request').defaults({json: true}),
    config = require('../config.js'),
    async = require('async');


module.exports = function (app) {
  
  /*Main Routes*/
  var userServer = config.userServer,
      carServer = config.carServer,
      bikeServer = config.bikeServer;

  /*Read*/

  /*Get all Data*/
  app.get(config.mainRoute, function (req, res) {
    async.parallel({
      user: function (callback) {
        request({uri: config.userServer + config.userRoute}, function (error, response, body) {
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
        request({uri: config.carServer + config.carRoute}, function (error, response, body) {
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
        request({uri: config.bikeServer + config.bikeRoute}, function (error, response, body) {
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

  /*Get users only*/
  app.get(config.mainRoute + config.userRoute, function (req, res) {
    request({ uri: config.userServer + config.userRoute}, function (error, response, body) {
      if (error) {
        res.end('An error has occured', error.statusCode);
      }
      res.send(response.body.data);
    });
  });

  app.get(config.mainRoute + config.carRoute, function (req, res) {
    request({ uri: config.carServer + config.carRoute}, function (error, response, body) {
      if (error) {
        res.end('An error has occured', error.statusCode);
      }
      res.send(response.body.data);
    });
  });

  app.get(config.mainRoute + config.bikeRoute, function (req, res) {
    request({ uri: config.bikeServer + config.bikeRoute}, function (error, response, body) {
      if (error) {
        res.end('An error has occured', error.statusCode);
      }
      res.send(response.body.data);
    });
  });

}