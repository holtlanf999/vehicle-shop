var _ = require('lodash'),
    mongoose = require('mongoose'),
    User = require('../app_models/user.model.js'),
    config = require('../config.js');

module.exports = function (app) {
  /*Create*/
  app.post(config.userRoute, function (req, res) {
    var newUser = new User(req.body);
    newUser.save(function (err) {
      if (err) {
        res.json({info: 'error during user create', error: err});
      }
        res.json({info: 'user created successfully'});
    });
  });

  app.post(config.userRoute + config.logRoute, function (req, res) {
    User.findOne({
      userName: req.body.userName
    }), function (err, user) {

      if (err) throw err;

      if (!user) {
        res.send({
          success: false, 
          message: 'Authentication failed. User not found'
        }); 
      } else if (user) {
        if(user.password != req.body.password) {
          res.send({
            success: false,
            message: 'Authentication failed, Wrong Password'
          });
        } else {
          var token = jwt.sign(user, app.get(''), {
            expiresInMinutes: 1440 //24 hours
          });

          res.end({
            success: true,
            message: 'token Created successfully',
            token: token
          })
        }
      }
    };
  });

  /*Read*/
  app.get(config.userRoute, function (req, res) {
    User.find(function (err, users) {
      if (err) {
        res.json({info: 'error during find users', error: err});
      }
      res.json({info: 'users found successfully', data: users});
    });
  });

  app.get(config.userRoute + '/:id', function (req, res) {
    User.findById(req.params.id, function (err, user) {
      if (err) {
        res.json({info: 'error during find user', error: err});
      }
      if (user) {
        res.json({info: 'user found successfully', data: user});
      } else {
        res.end('user not found');
      }
    });
  });

  /*Update*/
  app.put(config.userRoute + '/:id', function (req, res) {
    User.findById(req.params.id, function (err, user) {
      if (err) {
        res.json({info: 'error during find user', error: err});
      }
      if (user) {
        _.merge(user, req.body);
        user.save(function (err) {
          if (err) {
            res.json({info: 'error during user update', error: err});
          }
          res.json({info: 'user updated successfully'});
        });
      } else {
        res.json({info: 'user not found'});
      }
    });
  });

  // /*Delete*/
  app.delete(config.userRoute + '/:id', function (req, res) {
    User.findByIdAndRemove(req.params.id, function (err) {
      if (err) {
        res.json({info: 'error while remove user', error: err});
      }
      res.json({info: 'user removed successfully'});
    });
  });
};
