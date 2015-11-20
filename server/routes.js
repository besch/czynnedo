// Load modules

var Marker  = require('./controller/marker'),
  	Static  = require('./static');

// API Server Endpoints
exports.endpoints = [

  { method: 'GET',  path: '/{somethingss*}', config: Static.get },
  { method: 'POST', path: '/marker', config: Marker.create},
  { method: 'GET', path: '/marker', config: Marker.getAll},
  { method: 'GET', path: '/marker/{name}', config: Marker.getOne},
  { method: 'PUT', path: '/marker/{name}', config: Marker.update},
  { method: 'DELETE', path: '/marker/{name}', config: Marker.remove},
  { method: 'DELETE', path: '/marker', config: Marker.removeAll},

  // Import markers as excel/json
  { method: 'POST', path: '/import', config: Marker.import}
];