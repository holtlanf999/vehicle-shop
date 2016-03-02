(function() {
  'use strict';

  angular
    .module('appClient')
    .directive('mainFooter', mainFooter);

  /** @ngInject */
  function mainFooter() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/footer/footer.html',
      controller: footerController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function footerController() {
      // var vm = this;
    }
  }

})();
