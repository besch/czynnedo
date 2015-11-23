var GoogleMapsAPI = require('googlemaps'),
		q = require('q');

var deferred = q.defer();

var publicConfig = {
  key: 'AIzaSyB9MOe3_6dF9yB_fGCX2t_lh7nJrGs2ZyE',
  stagger_time:       1000, // for elevationPath
  encode_polylines:   false
  // secure:             true, // use https
  // proxy:              'http://127.0.0.1:9999' // optional, set a proxy for HTTP requests
};

var gmAPI = new GoogleMapsAPI(publicConfig);




exports.findAddressByCoords = function (coords) {
  // reverse geocode API
  var reverseGeocodeParams = {
    "latlng":        coords,
    // "latlng":        "51.1245,-0.0523",
    "result_type":   "postal_code",
    "language":      "en",
    "location_type": "APPROXIMATE"
  };

  gmAPI.reverseGeocode(reverseGeocodeParams, function(err, result) {
    // return result;
    // console.log(result);
    deferred.resolve(result);
  });

  return deferred.promise;
};

exports.findCoordsByAdress = function () {
  var geocodeParams = {
    "address":    "55-110 Gola, Poland",
    "components": "components=country:PL",
    "bounds":     "55,-1|54,1",
    "language":   "en",
    "region":     "pl"
  };

  gmAPI.geocode(geocodeParams, function(err, result){
    console.log(result);
    return result;
  });
};
