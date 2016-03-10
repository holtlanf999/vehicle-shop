var _ = require('lodash'),
    Car = require('../app_models/car.model.js'),
    config = require('../config.js');

module.exports = function (app) {
  /*Create*/
  app.post(config.carRoute, function (req, res) {
    var newCar = new Car(req.body);
    newCar.save(function (err) {
      if (err) {
        res.json({info: 'error during car create', error: err});
      }
        res.json({info: 'car created successfully'});
    });
  });

  /*Read*/
  app.get(config.carRoute, function (req, res) {
    Car.find(function (err, cars) {
      if (err) {
        res.json({info: 'error during find cars', error: err});
      }
      res.json({info: 'cars found successfully', data: cars});
    });
  });

  app.get(config.carRoute + ':id', function (req, res) {
    Car.findById(req.params.id, function (err, car) {
      if (err) {
        res.json({info: 'error during find car', error: err});
      }
      if (car) {
        res.json({info: 'car found successfully', data: car});
      } else {
        res.json({info: 'car not found'});
      }
    });
  });

  /*Update*/
  app.put(config.carRoute + '/:id', function (req, res) {
    Car.findById(req.params.id, function (err, car) {
      if (err) {
        res.json({info: 'error during find car', error: err});
      }
      if (car) {
        _.merge(car, req.body);
        car.save(function (err) {
          if (err) {
            res.json({info: 'error during car update', error: err});
          }
          res.json({info: 'car updated successfully'});
        });
      } else {
        res.json({info: 'car not found'});
      }
    });
  });

  // /*Delete*/
  app.delete(config.carRoute + '/:id', function (req, res) {
    Car.findByIdAndRemove(req.params.id, function (err) {
      if (err) {
        res.json({info: 'error while remove car', error: err});
      }
      res.json({info: 'car removed successfully'});
    });
  });
};
