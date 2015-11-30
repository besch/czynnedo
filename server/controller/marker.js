'use strict';

var Joi = require('joi'),
  Boom = require('boom'),
  Marker = require('../model/marker').Marker,
  mongoose = require('mongoose'),
  geocode = require('../helpers/geocode.js'),
  q = require('q');



exports.import = {

  handler: function (request, reply) {
    var items = request.payload;

    var thenFn = function(value) {
      return value;
    };

    var errorFn = function(value) {
      return value;
    };


    function saveMarker (markerObj) {

      var marker = new Marker(markerObj);

      marker.save(function (err, marker) {
        if (!err) {
          console.log(reply(marker).created('/marker/' + marker._id)); // HTTP 201
        }
        // if (11000 === err.code || 11001 === err.code) {
        //   console.log(reply(Boom.forbidden("please provide another id, it already exist")));
        // }
        // console.log(reply(Boom.forbidden(err))); // HTTP 403
      });
    }


    q.all(items.map(function (item) {

      return geocode.addAddressToMarker(item).then(thenFn, errorFn);

    })).then(function(markers) {

      markers.forEach(function (marker) {

        saveMarker(marker);

      });

    });
  }
};

exports.getAll = {

  handler: function (request, reply) {

    var date = new Date();
    var today = date.getDay(); // number
    var minutes = date.getMinutes();

    if (date.getMinutes() < 10) {
      minutes = '0' + minutes;
    }

    var currentTime = parseInt(date.getHours() + '' + minutes);
    console.log('date.getHours()', date.getHours());
    console.log('minutes', minutes);

    var query = {};
    var open = 'open_' + today;
    var close = 'close_' + today;

    query[open] = { $lt: currentTime };
    query[close] = { $gt: currentTime };

    console.log('query', query);

    Marker.find(query, function (err, marker) {
      console.log('marker', marker);

      if (!err) {
        return reply(marker);
      }
      return reply(Boom.badImplementation(err)); // 500 error
    });
  }
};

exports.getOne = {
  handler: function (request, reply) {
    Marker.findOne({ 'name': request.params.name }, function (err, marker) {
      if (!err) {
        return reply(marker);
      }
      return reply(Boom.badImplementation(err)); // 500 error
    });
  }
};

exports.create = {
  // validate: {
  //   payload: {
  //     name      : Joi.string().required(),
  //     category  : Joi.string().required()
  //   }
  // },
  handler: function (request, reply) {
    // console.log('request', request.payload.data);
    var marker = new Marker(request.payload.data);
    marker.save(function (err, marker) {
      if (!err) {
        return reply(marker).created('/marker/' + marker._id); // HTTP 201
      }
      if (11000 === err.code || 11001 === err.code) {
        return reply(Boom.forbidden("please provide another id, it already exist"));
      }
      return reply(Boom.forbidden(err)); // HTTP 403
    });
  }
};

exports.update = {
  validate: {
    payload: {
      name  : Joi.string().required()
    }
  },
  handler: function (request, reply) {
    Marker.findOne({ 'name': request.params.name }, function (err, marker) {
      if (!err) {
        marker.name = request.payload.name;
        marker.save(function (err, marker) {
          if (!err) {
            return reply(marker); // HTTP 201
          }
          if (11000 === err.code || 11001 === err.code) {
            return reply(Boom.forbidden("please provide another marker id, it already exist"));
          }
          return reply(Boom.forbidden(err)); // HTTP 403
        });
      }
      else{ 
        return reply(Boom.badImplementation(err)); // 500 error
      }
    });
  }
};

exports.remove = {
  handler: function (request, reply) {
    Marker.findOne({ 'name': request.params.name }, function (err, marker) {
      if (!err && marker) {
        marker.remove();
        return reply({ message: "Marker deleted successfully"});
      }
      if (!err) {
        return reply(Boom.notFound());
      }
      return reply(Boom.badRequest("Could not delete marker"));
    });
  }
};

exports.removeAll = {
  handler: function (request, reply) {
    mongoose.connection.db.dropCollection('markers', function (err, result) {
      if (!err) {
        return reply({ message: "Marker database successfully deleted"});
      }
      return reply(Boom.badRequest("Could not delete user"));
    });
  }
};


