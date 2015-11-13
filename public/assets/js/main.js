// INIT MAP
var map;
var infowindow;

var pyrmont = {lat: -33.867, lng: 151.195};

map = new google.maps.Map(document.getElementById('map'), {
  center: pyrmont,
  zoom: 15
});
// INIT MAP