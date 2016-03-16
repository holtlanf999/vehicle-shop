(function () {
  'use strict';
  angular
  .module('appClient')
  .service('bikeService', ['$http', bikeData]);

  function bikeData ($http) {
    $http.get('//localhost:4000/main/bike')
    .then(function (res) {
      var bikes = res.data;
      return bikes;
    });

    /*error handler*/
    function getError (res) {
      return console.log('Error', res);
    };
  }
})();
