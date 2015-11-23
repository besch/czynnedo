'use strict';

var Joi = require('joi'),
  Boom = require('boom'),
  Marker = require('../model/marker').Marker,
  mongoose = require('mongoose'),
  geocode = require('../helpers/geocode.js'),
  q = require('q');


var deferred = q.defer();


exports.import = {

  handler: function (request, reply) {
    var items = request.payload;
    var response = [];

    // var iterateJSON = function () {
      
    // var promise = function () {
    //   items.forEach(function (item) {
    //     var marker = new Marker(item);
    //     var position = parseFloat(item.latitude) + ',' + parseFloat(item.longitude);

    //     // console.log('geocode.findAddressByCoords(position);', geocode.findAddressByCoords(position));

    //     geocode.findAddressByCoords(position).then(function (result) {
    //       console.log('result', result);
    //       response.push(result);
    //     });

    //     // deferred.resolve(geocode.findAddressByCoords(position));
    //     deferred.resolve(promise);
    //   });

    //   return deferred.promise;
    // };


  function iterateJSON (item) {
    var position = parseFloat(item.latitude) + ',' + parseFloat(item.longitude);

    // geocode.findAddressByCoords(position).then(function (result) {
    //   console.log('coords', result);
    //   // return response.push(result);
    //   return result;
    // });

    return geocode.findAddressByCoords(position);

  }

  // q.all(items.map(iterateJSON))
  // .then(function (values) {
  //   console.log('values', values);
  //   // console.log('result53', result);
  //   // console.log('response54', response);
  //   reply(values);
  // });

q.all(items.map(iterateJSON)).then(function(result) {
    for (var i = 0, len = result.length; i < len; i++) {
        if (q.isPromise(result[i])) {
            result[i] = result[i].valueOf();
        }
    }

    console.log('result', result);
    reply(result);

    // Next step!
});


  // function iterateJSON (item) {
  //   var position = parseFloat(item.latitude) + ',' + parseFloat(item.longitude);

  //   geocode.findAddressByCoords(position).then(function (result) {
  //     console.log('coords', result);
  //     return response.push(result);
  //     // return console.log('response', response);
  //   });
  // }

  // return (items.map(iterateJSON)).reduce(q.when, q()).then(reply(response));




  // items.reduce(function (prev, job) {
  //   return prev.then(function () {
  //     return iterateJSON(job);
  //   });
  // }, q());





        // marker.save(function (err, marker) {
        //   if (!err) {
        //     console.log(reply(marker).created('/marker/' + marker._id)); // HTTP 201
        //   }
        //   if (11000 === err.code || 11001 === err.code) {
        //     console.log(reply(Boom.forbidden("please provide another id, it already exist")));
        //   }
        //   console.log(reply(Boom.forbidden(err))); // HTTP 403
        // });

        // If either address or coordinates exists logic TODO
      // var position = parseFloat(items[0].latitude) + ',' + parseFloat(items[0].longitude);
      // deferred.resolve(geocode.findAddressByCoords(position));
      // return deferred.promise;
    // }

    // console.log('response', response);
    // console.log('promise', promise);
    // promise.then(function (result) {
    //   console.log('result', result);
    //   // response.push(result);

    //   console.log('response', response);
    //   reply(response);
    // });

  }
};

exports.getAll = {
  handler: function (request, reply) {
    Marker.find({}, function (err, marker) {
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


