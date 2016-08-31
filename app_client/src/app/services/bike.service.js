(function () {
  'use strict';
  angular
  .module('appClient')
  .factory('bikeService', function($http, $log) {
    var bikeService = {
      async: function() {
        var getVehicle = $http.get('//localhost:4000/main/bike').then(function (res) {
          $log.log(res.data);
          return res.data;
        })
        return getVehicle;
      }
    }
    return bikeService;
  });

})();
