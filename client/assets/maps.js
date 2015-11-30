$(document).ready(function() {  
  // INIT MAP
  var map;
  var infowindow;
  var infoWindows = [];

  var initMapLoadCoords = { lat: 52.16045456, lng: 19.83032227 };

  map = new google.maps.Map(document.getElementById('map'), {
    center: initMapLoadCoords,
    zoom: 6
  });
  // INIT MAP

  function addMarker (marker) {
    var position = { lat: marker.latitude, lng: marker.longitude };

    var markerContent = '<div id="content">'+
        '<div id="siteNotice"></div>'+
          '<h1 id="firstHeading" class="firstHeading">' + marker.name + '</h1>'+
          '<div id="bodyContent">'+
            '<p><b>Description</b>: ' + marker.description + '</p>'+
            '<p><b>Category</b>: ' + marker.category + '</p>'+
            '<p><b>Address</b>: ' + marker.address + '</p>'+
            '<p><b>Links</b>: ' + marker.links + '</p>'+
            '<p><b>Images</b>: ' + marker.images + '</p>'+
          '</div>'+
        '</div>'+
      '</div>';
    
    var infowindow = new google.maps.InfoWindow({
      content: markerContent
    });
    
    infoWindows.push(infowindow);

    var marker = new google.maps.Marker({
      position: position,
      map: map,
      title: marker.name
    });
    
    marker.addListener('click', function() {
      for (var i=0;i<infoWindows.length;i++) {
        infoWindows[i].close();
      }
      
      infowindow.open(map, marker);
    });
  }


  $.ajax({
    url: '/marker'
  }).done(function (data) {
    data.forEach(function (marker) {
      addMarker(marker);
    });
  });

});