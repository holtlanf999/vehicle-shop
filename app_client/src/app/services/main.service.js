(function () {
  'use strict';
  angular
  .module('appClient')
  .service('mainService', ['$http', serviceData]);

  function serviceData ($http) {
    $http.get('//localhost:4000/main')
    .then( function getServerData (res) {
      console.log('cars: ', res.data.results.car);
      console.log('motorcycles: ', res.data.results.bike);
      console.log('users: ', res.data.results.user);
    }, function getError (res) {
      console.log('Error', res);
    });
  }
})();
