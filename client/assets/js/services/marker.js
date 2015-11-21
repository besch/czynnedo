
angular.module('czynnedo')
  .service('markerService', function ($http, $q) {
    
    function getAll () {
      $http.get('/marker').then(function (data) {
        console.log('data', data);
      });
    }

    function getOne (name) {
      $http.get('/marker/' + name).then(function (data) {
        console.log('data', data);
      });
    }

    function create (arguments) {
      $http.post('/marker', { data: arguments }, function (data) {
        console.log('data', data);
      });
    }

    function update () {
      $http.put('/marker/' + name, function (data) {
        console.log('data', data);
      });
    }

    function remove () {
      $http.delete('/marker/' + name, function (data) {
        console.log('data', data);
      });
    }

    return {
      getAll: getAll,
      getOne: getOne,
      create: create,
      update: update,
      remove: remove
    };

  });