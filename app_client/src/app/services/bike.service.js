(function () {
  'use strict';
  angular
  .module('appClient')
  .service('bikeService', ['$http', bikeData]);

  function bikeData ($http) {
    $http.get('//localhost:4000/main/bike')
    .then(getData),
    /*error handler*/
    function getError (res) {
      console.log('Error', res);
    };

    /*callback*/
    function getData (res) {
      console.log('bike result: ',res.data);
    }
  }
})();
