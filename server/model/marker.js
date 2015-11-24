'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var markerSchema = new Schema({
  name:        { type: String, required: true },
  description: { type: String },
  category:    { type: String, required: true },
  created:     { type: Date, default: Date.now },
  address:     { type: String },
  latitude:    { type: Number, required: true },
  longitude:   { type: Number, required: true },
  weekdays: {
    monday: {
      open:    Number,
      close:   Number,
    },
    tuesday: {
      open:    Number,
      close:   Number,
    },
    wednesday: {
      open:    Number,
      close:   Number,
    },
    thursday: {
      open:    Number,
      close:   Number,
    },
    friday: {
      open:    Number,
      close:   Number,
    },
    saturday: {
      open:    Number,
      close:   Number,
    },
    sunday: {
      open:    Number,
      close:   Number,
    }
  }
});

var marker = mongoose.model('marker', markerSchema);

module.exports = {
  Marker : marker
};