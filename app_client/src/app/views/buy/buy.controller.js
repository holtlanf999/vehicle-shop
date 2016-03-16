(function() {
  'use strict';

  angular
    .module('appClient')
    .controller('BuyController', ['carService','bikeService', BuyController]);

  /** @ngInject */
  function BuyController(carService, bikeService) {
    var vm = this;
    console.log('service in controller: ', bikeService);
  }
})();
