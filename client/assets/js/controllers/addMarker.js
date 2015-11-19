
angular.module('czynnedo')
  .controller('addMarkerController',  function ($scope, markerService) {
    
    $scope.hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
    $scope.minutes = [00, 15, 30, 45];
    $scope.categories = [
      'Restaurants',
      'Dinings',
      'Leasure'
    ];

    $scope.monday_to_friday = function () {
      $scope.marker.hour.start.tuesday = $scope.marker.hour.start.wednesday = $scope.marker.hour.start.thursday = $scope.marker.hour.start.friday = $scope.marker.hour.start.saturday = $scope.marker.hour.start.monday = $scope.marker.hour.start.sunday;
      $scope.marker.hour.end.tuesday = $scope.marker.hour.end.wednesday = $scope.marker.hour.end.thursday = $scope.marker.hour.end.friday = $scope.marker.hour.start.monday = $scope.marker.hour.start.sunday = $scope.marker.hour.end.monday; 
    }

    $scope.addMarker = function () {
      console.log('parseFloat($scope.marker.latitude, 10)', parseFloat($scope.marker.latitude));
      console.log('parseFloat($scope.marker.longitude, 10)', parseFloat($scope.marker.longitude));

      markerService.create({
        name:        $scope.marker.name || 'Name',
        description: $scope.marker.description || 'Desc',
        category:    $scope.marker.category || 'Restaurants',
        // address:     $scope.marker.address || 'new address',
        lat:         parseFloat($scope.marker.latitude, 10),
        lng:         parseFloat($scope.marker.longitude, 10),
        weekdays:    {
          monday: {
            openHours: $scope.marker.hour.start.monday,
            openMinutes: $scope.minute.start.monday,
            closeHours: $scope.marker.hour.end.monday,
            closeMinutes: $scope.minute.end.monday
          },
          tuesday: {
            openHours: $scope.marker.hour.start.tuesday,
            openMinutes: $scope.minute.start.tuesday,
            closeHours: $scope.marker.hour.end.tuesday,
            closeMinutes: $scope.minute.end.tuesday
          },
          wednesday: {
            openHours: $scope.marker.hour.start.wednesday,
            openMinutes: $scope.minute.start.wednesday,
            closeHours: $scope.marker.hour.end.wednesday,
            closeMinutes: $scope.minute.end.wednesday
          },
          thursday: {
            openHours: $scope.marker.hour.start.thursday,
            openMinutes: $scope.minute.start.thursday,
            closeHours: $scope.marker.hour.end.thursday,
            closeMinutes: $scope.minute.end.thursday
          },
          friday: {
            openHours: $scope.marker.hour.start.friday,
            openMinutes: $scope.minute.start.friday,
            closeHours: $scope.marker.hour.end.friday,
            closeMinutes: $scope.minute.end.friday
          },
          saturday: {
            openHours: $scope.marker.hour.start.saturday,
            openMinutes: $scope.minute.start.saturday,
            closeHours: $scope.marker.hour.end.saturday,
            closeMinutes: $scope.minute.end.saturday
          },
          sunday: {
            openHours: $scope.marker.hour.start.sunday,
            openMinutes: $scope.minute.start.sunday,
            closeHours: $scope.marker.hour.end.sunday,
            closeMinutes: $scope.minute.end.sunday
          },
        }
      });
    };

  });