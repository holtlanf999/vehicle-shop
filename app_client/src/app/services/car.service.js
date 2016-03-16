(function () {
  'use strict';
  angular
  .module('appClient')
  .service('carService', ['$http', carData]);

  function carData ($http) {
    $http.get('//localhost:4000/main/car')
    .then(function (res) {
      return res;
    }),

    /*error handler*/
    function getError (res) {
      return console.log('Error', res);
    };
  }
})();
