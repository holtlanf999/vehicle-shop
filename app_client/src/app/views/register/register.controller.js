(function() {
  'use strict';

  angular
    .module('appClient')
    .controller('RegisterController', ['userService', RegisterController]);

  // /** @ngInject */
  function RegisterController(userService) {
    var vm = this;
    vm.submit = function () {
      console.log('users: ', vm);
    }
  }
})();
