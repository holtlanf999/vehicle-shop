(function () {
  'use strict';
  angular
  .module('appClient')
  .service('mainService', ['$http', serviceData]);

  function serviceData ($http) {
    $http.get('//localhost:4000/main')
    .then( function getServerData (res) {
      console.log('success', res);
    }, function getError (res) {
      console.log('Error', res);
    });
  }
})();
