(function() {
  'use strict';

  angular
    .module('app.watchmen')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'watchmen',
        config: {
          url: '/watchmen',
          templateUrl: 'app/watchmen/watchmen.html',
          controller: 'WatchmenController',
          controllerAs: 'vm',
          title: 'Watchmen',
          settings: {
            nav: 2,
            content: '<i class="fa fa-lock"></i> Watchmen'
          }
        }
      }
    ];
  }
})();
