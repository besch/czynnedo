
angular.module('czynnedo')
  .controller('mapController', function ($scope, markerService) {
    
    // $scope.initMap = function () {
    //   var centerCoords = {lat: -33.867, lng: 151.195};

    //   $scope.map = function () {
    //     new google.maps.Map(document.getElementById('map'), {
    //       center: centerCoords,
    //       zoom: 15
    //     });
    //   };
    // };


    // $scope.addMarker = function (marker) {
    //   var position = {lat: marker.lat, lng: marker.lat};

    //   var contentString = '<div id="content">'+
    //       '<div id="siteNotice"></div>'+
    //         '<h1 id="firstHeading" class="firstHeading">' + marker.name + '</h1>'+
    //         '<div id="bodyContent">'+
    //           '<p>' + marker.description + '</p>'+
    //           '<p>' + marker.category + '</p>'+
    //           '<div>' + 
    //             'h4> Otwarte: </h4>' + 
    //             '<div>' +
    //               '<p>Poniedziałek: ' + marker.weekdays.monday.openHours + ' ' + marker.weekdays.monday.closeHours + '</p>' +
    //               '<p>Wtorek: ' + marker.weekdays.tuesday.openHours + ' ' + marker.weekdays.tuesday.closeHours + '</p>' +
    //               '<p>Środa: ' + marker.weekdays.wednesday.openHours + ' ' + marker.weekdays.wednesday.closeHours + '</p>' +
    //               '<p>Czwartek: ' + marker.weekdays.thursday.openHours + ' ' + marker.weekdays.thursday.closeHours + '</p>' +
    //               '<p>Piątek: ' + marker.weekdays.friday.openHours + ' ' + marker.weekdays.friday.closeHours + '</p>' +
    //               '<p>Sobota: ' + marker.weekdays.saturday.openHours + ' ' + marker.weekdays.saturday.closeHours + '</p>' +
    //               '<p>Niedziela: ' + marker.weekdays.sunday.openHours + ' ' + marker.weekdays.sunday.closeHours + '</p>' +
    //             '</div>' +
    //         '</div>'+
    //       '</div>';

    //   console.log('google.maps', new google.maps);

    //   var infowindow = new google.maps.InfoWindow({
    //     content: contentString
    //   });

    //   var marker = new google.maps.Marker({
    //     position: position,
    //     map: $scope.map,
    //     title: marker.name
    //   });

    //   marker.addListener('click', function() {
    //     infowindow.open($scope.map, marker);
    //   });
    // }

    // markerService.getAll(function (data) {
    //   initMap();

    //   data.markers.forEach(function (marker, key) {
    //     addMarker(marker);
    //   });
    // });

  });