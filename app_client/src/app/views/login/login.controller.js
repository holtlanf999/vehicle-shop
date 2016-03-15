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
      console.log('user name: ', vm.user_name);
      console.log('service user name: ', userService.user.name + '\n');
      console.log('Pass: ', vm.user_password);
      console.log('service pass: ', userService.user.pass);
    }
  }
})();
