(function() {
  'use strict';

  angular
    .module('appClient')
    .controller('BuyController', ['carService','bikeService', BuyController]);

  /** @ngInject */
  function BuyController(carService, bikeService) {
    var vm = this;

    vm.category = [
      {value: 'car'},
      {value: 'motorcycle'}
    ];

    function init() {
      carService.async().then(function (data) {
        vm.cars = data;
        console.log(vm.cars);
      });

      bikeService.async().then(function (data) {
        vm.bikes = data;
        console.log(vm.bikes);
      });
    }
    init();    
  }
})();

