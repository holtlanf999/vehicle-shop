(function () {
  'use strict';
  angular
  .module('appClient')
  .service('userService', ['$http', userData]);

  function userData ($http) {
    $http.get('//localhost:4000/main/user')
    .then(function (res) {
      console.log('user: ', res.data);
    }),

    /*error handler*/
    function getError (res) {
      console.log('Error', res);
    };

    /*callback*/
  /*function getData (res) {
      console.log('user result: ', res.data);
      return res;
    }*/
  }
})();
