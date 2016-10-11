(function() {
  'use strict';

  angular
    .module('app.welcome')
    .controller('WelcomeController', WelcomeController);

  WelcomeController.$inject = ['logger'];
  /* @ngInject */
  function WelcomeController(logger) {
    var vm = this;
    vm.title = 'Welcome';

    activate();

    function activate() {
      logger.info('Activated Welcome View');
    }
  }
})();
