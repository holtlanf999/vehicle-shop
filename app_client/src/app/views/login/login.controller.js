(function() {
  'use strict';

  angular
    .module('appClient')
    .controller('LoginController', ['userService',  LoginController]);

  /** @ngInject */
  function LoginController(userService, lodash) {
    var vm = this;

    // console.log(userService);

    vm.enter = function() {
      console.log(userService.getUserData());
    }
  }
})();
