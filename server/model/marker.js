'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var markerSchema = new Schema({
  name:        { type: String, required: true },
  description: { type: String },
  category:    { type: String, required: true },
  created:     { type: Date, default: Date.now },
  address:     { type: String },
  lat:         { type: String },
  lng:         { type: String },
  weekdays: {
    monday: {
      openHours:    Number,
      openMinutes:  Number,
      closeHours:   Number,
      closeMinutes: Number
    },
    tuesday: {
      openHours:    Number,
      openMinutes:  Number,
      closeHours:   Number,
      closeMinutes: Number
    },
    thirsday: {
      openHours:    Number,
      openMinutes:  Number,
      closeHours:   Number,
      closeMinutes: Number
    },
    friday: {
      openHours:    Number,
      openMinutes:  Number,
      closeHours:   Number,
      closeMinutes: Number
    },
    saturday: {
      openHours:    Number,
      openMinutes:  Number,
      closeHours:   Number,
      closeMinutes: Number
    },
    sunday: {
      openHours:    Number,
      openMinutes:  Number,
      closeHours:   Number,
      closeMinutes: Number
    }
  }
});

var marker = mongoose.model('marker', markerSchema);

module.exports = {
  Marker : marker
};