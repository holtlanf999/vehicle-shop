(function() {
  'use strict';

  angular
    .module('appClient')
    .controller('LoginController', ['userService',  LoginController]);

  /** @ngInject */
  function LoginController(userService, lodash, $log) {
    var vm = this;

    // console.log(userService);

    vm.enter = function() {
      $log.log('user name: ', vm.user_name);
      $log.log('service user name: ', userService.user.name + '\n');
      $log.log('Pass: ', vm.user_password);
      $log.log('service pass: ', userService.user.pass);
    }
  }
})();
