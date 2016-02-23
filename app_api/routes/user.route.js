var _ = require('lodash'),
    User = require('../app_models/user.model.js');

module.exports = function (app) {
  /*Create*/
  app.post('/user', function (req, res) {
    var newUser = new User(req.body);
    newUser.save(function (err) {
      if (err) {
        res.json({info: 'error during user create', error: err});
      }
        res.json({info: 'user created successfully'});
    });
  });

  /*Read*/
  app.get('/user', function (req, res) {
    User.find(function (err, users) {
      if (err) {
        res.json({info: 'error during find users', error: err});
      }
      res.json({info: 'users found successfully', data: users});
    });
  });

  app.get('/user/:id', function (req, res) {
    User.findById(req.params.id, function (err, user) {
      if (err) {
        res.json({info: 'error during find user', error: err});
      }
      if (user) {
        res.json({info: 'user found successfully', data: user});
      } else {
        res.json({info: 'user not found'});
      }
    });
  });

  /*Update*/
  app.put('/user/:id', function (req, res) {
    User.findById(req.params.id, function (err, user) {
      if (err) {
        res.json({info: 'error during find user', error: err});
      }
      if (user) {
        _.merge(user, req.body);
        User.save(function (err) {
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
  app.delete('/user/:id', function (req, res) {
    User.findByIdAndRemove(req.params.id, function (err) {
      if (err) {
        res.json({info: 'error while remove user', error: err});
      }
      res.json({info: 'user removed successfully'});
    });
  });
};
