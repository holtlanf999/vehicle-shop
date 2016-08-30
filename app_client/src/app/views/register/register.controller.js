(function() {
  'use strict';

  angular
    .module('appClient')
    .controller('RegisterController', ['userService', RegisterController]);

  // /** @ngInject */
  function RegisterController(userService, $log) {
    var vm = this;
    vm.submit = function () {
      $log.log('users: ', vm);
    }
  }
})();
