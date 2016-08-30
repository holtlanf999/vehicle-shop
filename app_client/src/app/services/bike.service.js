(function () {
  'use strict';
  angular
  .module('appClient')
  .factory('bikeService', function($http) {
    var bikeService = {
      async: function() {
        var getVehicle = $http.get('//localhost:4000/main/bike').then(function (res) {
          console.log(res.data);
          return res.data;
        })
        return getVehicle;
      }
    }
    return bikeService;
  });

})();
