(function () {
  'use strict';
  angular
  .module('appClient')
  .factory('carService', function($http) {
    var carService = {
      async: function() {
        var getVehicle = $http.get('//localhost:4000/main/car').then(function (res) {
          console.log(res.data);
          return res.data;
        })
        return getVehicle;
      }
    }
    return carService;
  });

})();
