$(document).ready(function() {  
  // INIT MAP
  var map;
  var infowindow;

  var initMapLoadCoords = { lat: 52.16045456, lng: 19.83032227 };

  map = new google.maps.Map(document.getElementById('map'), {
    center: initMapLoadCoords,
    zoom: 6
  });
  // INIT MAP

  function addMarker (marker) {
    var position = {lat: marker.lat, lng: marker.lat};

    var contentString = '<div id="content">'+
        '<div id="siteNotice"></div>'+
          '<h1 id="firstHeading" class="firstHeading">' + marker.name + '</h1>'+
          '<div id="bodyContent">'+
            '<p>' + marker.description + '</p>'+
            '<p>' + marker.category + '</p>'+
            '<div>' + 
              'h4> Otwarte: </h4>' + 
              '<div>' +
                '<p>Poniedziałek: ' + marker.weekdays.monday.openHours || '' + ' ' + marker.weekdays.monday.closeHours || '' + '</p>' +
                '<p>Wtorek: ' + marker.weekdays.tuesday.openHours || '' + ' ' + marker.weekdays.tuesday.closeHours || '' + '</p>' +
                '<p>Środa: ' + marker.weekdays.wednesday.openHours || '' + ' ' + marker.weekdays.wednesday.closeHours || '' + '</p>' +
                '<p>Czwartek: ' + marker.weekdays.thursday.openHours || '' + ' ' + marker.weekdays.thursday.closeHours || '' + '</p>' +
                '<p>Piątek: ' + marker.weekdays.friday.openHours || '' + ' ' + marker.weekdays.friday.closeHours || '' + '</p>' +
                '<p>Sobota: ' + marker.weekdays.saturday.openHours || '' + ' ' + marker.weekdays.saturday.closeHours || '' + '</p>' +
                '<p>Niedziela: ' + marker.weekdays.sunday.openHours || '' + ' ' + marker.weekdays.sunday.closeHours || '' + '</p>' +
              '</div>' +
          '</div>'+
        '</div>';

    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });

    var marker = new google.maps.Marker({
      position: position,
      map: map,
      title: marker.name
    });

    marker.addListener('click', function() {
      infowindow.open($scope.map, marker);
    });
  }

  

  $.ajax({
    url: '/marker'
  }).done(function (data) {
    console.log('data', data);

    data.forEach(function (marker, key) {
      addMarker(marker);
    });
  });

});