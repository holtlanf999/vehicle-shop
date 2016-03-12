(function() {
  'use strict';

  angular
    .module('appClient')
    .controller('RegisterController', RegisterController);

  // /** @ngInject */
  function RegisterController() {
    var vm = this;
    vm.submit = function () {
      console.log(vm);
    }
  }
})();
