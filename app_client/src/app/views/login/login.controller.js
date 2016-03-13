(function() {
  'use strict';

  angular
    .module('appClient')
    .controller('LoginController', ['userService', LoginController]);

  /** @ngInject */
  function LoginController(userService) {
    var vm = this;

    console.log(userService);

    vm.enter = function() {
      console.log(vm);
    }
  }
})();
