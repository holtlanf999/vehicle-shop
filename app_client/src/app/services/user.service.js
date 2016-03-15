(function () {
  'use strict';
  angular
  .module('appClient')
  .service('userService', ['$http', userService]);

  function userService ($http, lodash) {
    this.getUserData = function () {
      $http.get('//localhost:4000/main/user')
      .then(function (res) {
        var users = res.data;
        console.log(res.data);
        _.find(users, function (o) {
          console.log(o.userName, o.password);
        });
      }),
      /*error handler*/
      function getError (res) {
        console.log('Error', res);
      };
    }
  }
})();
