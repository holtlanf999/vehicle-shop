(function() {
  'use strict';

  angular
    .module('appClient')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController() {
    var vm = this;

    vm.enter = function() {
      console.log(vm);
    }
  }
})();
