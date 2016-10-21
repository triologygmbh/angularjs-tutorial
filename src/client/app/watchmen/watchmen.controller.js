/*
* The MIT License (MIT)
*
* Copyright (c) 2016 TRIOLOGY GmbH
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*
*/

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
