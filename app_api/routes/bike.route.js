var _ = require('lodash'),
    Bike = require('../app_models/bike.model.js');

module.exports = function (app) {
  /*Create*/
  app.post('/bike', function (req, res) {
    var newBike = new Bike(req.body);
    newBike.save(function (err) {
      if (err) {
        res.json({info: 'error during bike create', error: err});
      }
        res.json({info: 'bike created successfully'});
    });
  });

  /*Read*/
  app.get('/bike', function (req, res) {
    Bike.find(function (err, bikes) {
      if (err) {
        res.json({info: 'error during find bikes', error: err});
      }
      res.json({info: 'bikes found successfully', data: bikes});
    });
  });

  app.get('/bike/:id', function (req, res) {
    Bike.findById(req.params.id, function (err, bike) {
      if (err) {
        res.json({info: 'error during find bike', error: err});
      }
      if (bike) {
        res.json({info: 'bike found successfully', data: bike});
      } else {
        res.json({info: 'bike not found'});
      }
    });
  });

  /*Update*/
  app.put('/bike/:id', function (req, res) {
    Bike.findById(req.params.id, function (err, bike) {
      if (err) {
        res.json({info: 'error during find bike', error: err});
      }
      if (bike) {
        _.merge(bike, req.body);
        bike.save(function (err) {
          if (err) {
            res.json({info: 'error during bike update', error: err});
          }
          res.json({info: 'bike updated successfully'});
        });
      } else {
        res.json({info: 'bike not found'});
      }
    });
  });

  // /*Delete*/
  app.delete('/bike/:id', function (req, res) {
    Bike.findByIdAndRemove(req.params.id, function (err) {
      if (err) {
        res.json({info: 'error while remove bike', error: err});
      }
      res.json({info: 'bike removed successfully'});
    });
  });
};
