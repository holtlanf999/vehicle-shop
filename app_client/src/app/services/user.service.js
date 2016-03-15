(function () {
  'use strict';
  angular
  .module('appClient')
  .service('userService', ['$http', userService]);

  function userService ($http, lodash) {

    var user = {};

    user.name = [],
    user.pass = [],

    $http.get('//localhost:4000/main/user')
    .then(function (res) {
      // console.log('res.data: ', res.data);

      _.forEach(res.data, function(value, key) {
        var getName = _.get(value, 'userName'),
            getPass = _.get(value, 'password');

        user.name.push(getName);
        user.pass.push(getPass);
      });
    }),
    // .finally(function (res) {
    //   return user
    // }),

    function getError (res) {
      console.log('Error', res);
    };

    return {
      user: user
    }

  }
})();
