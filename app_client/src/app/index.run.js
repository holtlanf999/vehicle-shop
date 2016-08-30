(function() {
  'use strict';

  angular
    .module('appClient')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {
    $log.debug('runBlock end');
  }

})();
