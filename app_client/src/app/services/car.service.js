(function () {
  'use strict';
  angular
  .module('appClient')
  .service('carService', ['$http', carData]);

  function carData ($http) {
    $http.get('//localhost:4000/main/car')
    .then(getData),
    /*error handler*/
    function getError (res) {
      console.log('Error', res);
    };

    /*callback*/
    function getData (res) {
      console.log('car result: ',res.data);
    }
  }
})();
