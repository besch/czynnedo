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
    var position = { lat: parseFloat(marker.lat), lng: parseFloat(marker.lng) };

    var weekdays = marker.weekdays;

    var mon_start = ( _.has(weekdays, 'monday.openHours') ? weekdays.monday.openHours  : '') + ':' + ( _.has(weekdays, 'monday.openMinutes') ? weekdays.monday.openMinutes : ''),
        tue_start = ( _.has(weekdays, 'tuesday.openHours') ? weekdays.tuesday.openHours  : '') + ':' + ( _.has(weekdays, 'tuesday.openMinutes') ? weekdays.tuesday.openMinutes : ''),
        wed_start = ( _.has(weekdays, 'wednesday.openHours') ? weekdays.wednesday.openHours  : '') + ':' + ( _.has(weekdays, 'wednesday.openMinutes') ? weekdays.wednesday.openMinutes : ''),
        thu_start = ( _.has(weekdays, 'thursday.openHours') ? weekdays.thursday.openHours  : '') + ':' + ( _.has(weekdays, 'thursday.openMinutes') ? weekdays.thursday.openMinutes : ''),
        fri_start = ( _.has(weekdays, 'friday.openHours') ? weekdays.friday.openHours  : '') + ':' + ( _.has(weekdays, 'friday.openMinutes') ? weekdays.friday.openMinutes : ''),
        sat_start = ( _.has(weekdays, 'saturday.openHours') ? weekdays.saturday.openHours  : '') + ':' + ( _.has(weekdays, 'saturday.openMinutes') ? weekdays.saturday.openMinutes : ''),
        sun_start = ( _.has(weekdays, 'sunday.openHours') ? weekdays.sunday.openHours  : '') + ':' + ( _.has(weekdays, 'sunday.openMinutes') ? weekdays.sunday.openMinutes : '');

    var mon_end = ( _.has(weekdays, 'monday.closeHours') ? weekdays.monday.closeHours  : '') + ':' + ( _.has(weekdays, 'monday.closeMinutes') ? weekdays.monday.closeMinutes : ''),
        tue_end = ( _.has(weekdays, 'tuesday.closeHours') ? weekdays.tuesday.closeHours  : '') + ':' + ( _.has(weekdays, 'tuesday.closeMinutes') ? weekdays.tuesday.closeMinutes : ''),
        wed_end = ( _.has(weekdays, 'wednesday.closeHours') ? weekdays.wednesday.closeHours  : '') + ':' + ( _.has(weekdays, 'wednesday.closeMinutes') ? weekdays.wednesday.closeMinutes : ''),
        thu_end = ( _.has(weekdays, 'thursday.closeHours') ? weekdays.thursday.closeHours  : '') + ':' + ( _.has(weekdays, 'thursday.closeMinutes') ? weekdays.thursday.closeMinutes : ''),
        fri_end = ( _.has(weekdays, 'friday.closeHours') ? weekdays.friday.closeHours  : '') + ':' + ( _.has(weekdays, 'friday.closeMinutes') ? weekdays.friday.closeMinutes : ''),
        sat_end = ( _.has(weekdays, 'saturday.closeHours') ? weekdays.saturday.closeHours  : '') + ':' + ( _.has(weekdays, 'saturday.closeMinutes') ? weekdays.saturday.closeMinutes : ''),
        sun_end = ( _.has(weekdays, 'sunday.closeHours') ? weekdays.sunday.closeHours  : '') + ':' + ( _.has(weekdays, 'sunday.closeMinutes') ? weekdays.sunday.closeMinutes : '');


    var markerContent = '<div id="content">'+
        '<div id="siteNotice"></div>'+
          '<h1 id="firstHeading" class="firstHeading">' + marker.name + '</h1>'+
          '<div id="bodyContent">'+
            '<p><b>Description</b>: ' + marker.description + '</p>'+
            '<p><b>Category</b>: ' + marker.category + '</p>'+
            // '<p><b>Address</b>: ' + findAddressByCoords(position) + '</p>'+
            '<div>' + 
              '<h4> Otwarte: </h4>' + 
              '<div>' +
                '<p>Poniedziałek: ' + mon_start + ' - ' + mon_end + '</p>' +
                '<p>Wtorek: '       + tue_start + ' - ' + tue_end + '</p>' +
                '<p>Środa: '        + wed_start + ' - ' + wed_end + '</p>' +
                '<p>Czwartek: '     + thu_start + ' - ' + thu_end + '</p>' +
                '<p>Piątek: '       + fri_start + ' - ' + fri_end + '</p>' +
                '<p>Sobota: '       + sat_start + ' - ' + sat_end + '</p>' +
                '<p>Niedziela: '    + sun_start + ' - ' + sun_end + '</p>' +
              '</div>' +
            '</div>' +
          '</div>'+
        '</div>'
      '</div>';

    var infowindow = new google.maps.InfoWindow({
      content: markerContent
    });

    var marker = new google.maps.Marker({
      position: position,
      map: map,
      title: marker.name
    });

    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });
  }

  
  // function findAddressByCoords (coords) {
  //   var geocoder = new google.maps.Geocoder;
  //   geocoder.geocode({'location': coords }, function(results, status) {
  //     if (status === google.maps.GeocoderStatus.OK) {
  //       if (results[1]) {
  //         return results[1].formatted_address;
  //       } else {
  //         window.alert('No results found');
  //       }
  //     } else {
  //       window.alert('Geocoder failed due to: ' + status);
  //     }
  //   });
  // }


  $.ajax({
    url: '/marker'
  }).done(function (data) {

    data.forEach(function (marker, key) {
      addMarker(marker);
    });
  });

});