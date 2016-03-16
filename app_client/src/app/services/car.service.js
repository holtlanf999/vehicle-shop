(function () {
  'use strict';
  angular
  .module('appClient')
  .service('carService', ['$http', carData]);

  function carData ($http) {
    $http.get('//localhost:4000/main/car')
    .then(function (res) {
      // console.log('car result: ',res.data);
    }),

    /*error handler*/
    function getError (res) {
      console.log('Error', res);
    };
  }
})();
