
angular.module('czynnedo')
  .controller('addMarkerController',  function ($scope, markerService) {
    
    $scope.hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
    $scope.minutes = [0, 15, 30, 45];
    $scope.categories = [
      'Restaurants',
      'Dinings',
      'Leasure'
    ];

    $scope.monday_to_friday = function () {
      $scope.marker.hour.start.tuesday = $scope.marker.hour.start.monday = $scope.marker.hour.start.monday = $scope.marker.hour.start.monday = $scope.marker.hour.start.monday;
      $scope.marker.hour.end.tuesday = $scope.marker.hour.end.monday = $scope.marker.hour.end.monday = $scope.marker.hour.end.monday = $scope.marker.hour.end.monday; 
    }

    $scope.addMarker = function () {
      markerService.create({
        name:        $scope.marker.name || 'Name',
        description: $scope.marker.description || 'Desc',
        category:    $scope.marker.category || 'Restaurants',
        // address:     $scope.marker.address || 'new address',
        lat:         $scope.marker.lat || '12345345',
        lng:         $scope.marker.lon || '567879',
        weekdays:    {
          monday: {
            openHours: $scope.marker.hour.start.monday,
            openMinutes: $scope.minute.start.monday,
            closeHours: $scope.marker.hour.start.monday,
            closeMinutes: $scope.minute.start.monday
          },
          tuesday: {
            openHours: $scope.marker.hour.start.monday,
            openMinutes: $scope.minute.start.monday,
            closeHours: $scope.marker.hour.start.monday,
            closeMinutes: $scope.minute.start.monday
          },
          wednesday: {
            openHours: $scope.marker.hour.start.monday,
            openMinutes: $scope.minute.start.monday,
            closeHours: $scope.marker.hour.start.monday,
            closeMinutes: $scope.minute.start.monday
          },
          thirsday: {
            openHours: $scope.marker.hour.start.monday,
            openMinutes: $scope.minute.start.monday,
            closeHours: $scope.marker.hour.start.monday,
            closeMinutes: $scope.minute.start.monday
          },
          friday: {
            openHours: $scope.marker.hour.start.monday,
            openMinutes: $scope.minute.start.monday,
            closeHours: $scope.marker.hour.start.monday,
            closeMinutes: $scope.minute.start.monday
          },
          saturday: {
            openHours: $scope.marker.hour.start.monday,
            openMinutes: $scope.minute.start.monday,
            closeHours: $scope.marker.hour.start.monday,
            closeMinutes: $scope.minute.start.monday
          },
          sunday: {
            openHours: $scope.marker.hour.start.monday,
            openMinutes: $scope.minute.start.monday,
            closeHours: $scope.marker.hour.start.monday,
            closeMinutes: $scope.minute.start.monday
          },
        }
      });
    };

  });