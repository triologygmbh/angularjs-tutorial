(function () {
  'use strict';

  angular
    .module('app.core')
    .factory('dataservice', dataservice);

  dataservice.$inject = ['$http', '$q', 'exception', 'logger'];
  /* @ngInject */
  function dataservice($http, $q, exception, logger) {
    var service = {
      getWatchmen: getWatchmen,
      postWatchmen: postWatchmen,
      deleteWatchmenById: deleteWatchmenById
    };

    return service;

    function getWatchmen() {
      return $http.get('/api/watchmen')
        .then(success)
        .catch(fail);

      function success(response) {
        return response.data;
      }

      function fail(e) {
        return exception.catcher('XHR Failed for getWatchmen')(e);
      }
    }

    function postWatchmen(data) {
      return $http.post('/api/watchmen', data)
        .then(success)
        .catch(fail);

      function success(response) {
        return response.data;
      }

      function fail(e) {
        return exception.catcher('XHR Failed for postWatchmen')(e);
      }
    }

    function deleteWatchmenById(data) {
      return $http.delete('/api/watchmen/' + data, data)
        .then(success)
        .catch(fail);

      function success(response) {
        return response.data;
      }

      function fail(e) {
        return exception.catcher('XHR Failed for deleteWatchmenById')(e);
      }
    }
  }
})();
