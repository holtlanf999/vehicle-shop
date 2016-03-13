(function () {
  'use strict';
  angular
  .module('appClient')
  .service('mainService', ['$http', serviceData]);

  function serviceData ($http) {
    $http.get('//localhost:4000/main')
    .then(getData),
    function getError (res) {
      console.log('Error', res);
    };

    function getData (res) {
      console.log('car result: ',res.data.results.car);
      console.log('bike result: ',res.data.results.bike);
    }
  }
})();
