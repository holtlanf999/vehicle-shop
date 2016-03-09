(function() {
  'use strict';

  angular
    .module('appClient')
    .controller('SellController', SellController);

  /** @ngInject */
  function SellController() {
    // var vm = this;
  }
})();


function SubmitVehicle() {
	console.log(this);
}