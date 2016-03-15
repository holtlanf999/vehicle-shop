(function() {
  'use strict';

  angular
    .module('appClient')
    .controller('SellController', SellController);

  /** @ngInject */
  function SellController() {
    var vm = this;
    vm.submitVehicle = submitVehicle;
  }
})();


function submitVehicle() {
	console.log(this);
}
