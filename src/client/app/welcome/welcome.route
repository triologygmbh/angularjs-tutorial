(function() {
  'use strict';

  angular
    .module('app.welcome')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'welcome',
        config: {
          url: '/welcome',
          templateUrl: 'app/welcome/welcome.html',
          controller: 'WelcomeController',
          controllerAs: 'vm',
          title: 'Welcome',
          settings: {
            nav: 1,
            content: '<i class="fa fa-lock"></i> Welcome'
          }
        }
      }
    ];
  }
})();
