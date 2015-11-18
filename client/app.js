
angular.module('czynnedo', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/map');
    
    $stateProvider

    .state('map', {
        url: '/map',
        templateUrl: 'assets/partials/map.html',
        controller: 'mapController'
    })

    .state('addMarker', {
        url: '/add-marker',
        templateUrl: 'assets/partials/addMarker.html',
        controller: 'addMarkerController'
    });

});