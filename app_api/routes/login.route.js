var mongoose = require('mongoose'),
    User = require('../app_models/user.model.js'),
    config = require('../config.js');

module.exports = function (app) {
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
}