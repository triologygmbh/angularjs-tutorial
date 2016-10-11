(function () {
  'use strict';

  angular
    .module('app.watchmen')
    .controller('WatchmenController', WatchmenController);

  WatchmenController.$inject = ['$q', 'dataservice', 'logger'];
  /* @ngInject */
  function WatchmenController($q, dataservice, logger) {
    var vm = this;

    vm.watchmen = [];
    vm.title = 'Watchmen';

    vm.sendData = function () {
      vm.data = {
        firstName: vm.firstName,
        lastName: vm.lastName,
        alias: vm.alias
      };
      return postWatchmen(vm.data);
    };

    vm.deleteData = function () {
      return deleteWatchmenById(vm.idToDel);
    };

    activate();

    function activate() {
      var promises = [getWatchmen()];
      return $q.all(promises).then(function () {
        logger.info('Activated Watchmen View');
      });
    }

    function getWatchmen() {
      return dataservice.getWatchmen().then(function (data) {
        vm.watchmen = data;
        return vm.watchmen;
      });
    }

    function postWatchmen(data) {
      return dataservice.postWatchmen(data).then(getWatchmen);
    }

    function deleteWatchmenById(data) {
      return dataservice.deleteWatchmenById(data).then(getWatchmen);
    }
  }
})();
