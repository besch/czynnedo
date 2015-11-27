'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var markerSchema = new Schema({
  name:        { type: String, required: true },
  description: { type: String },
  category:    { type: String, required: true },
  subcategory: { type: String },
  address:     { type: String },
  created:     { type: Date, default: Date.now },
  latitude:    { type: Number, required: true },
  longitude:   { type: Number, required: true },
  weekdays:    {
    1: {
      open:    Number,
      close:   Number,
    },
    2: {
      open:    Number,
      close:   Number,
    },
    3: {
      open:    Number,
      close:   Number,
    },
    4: {
      open:    Number,
      close:   Number,
    },
    5: {
      open:    Number,
      close:   Number,
    },
    6: {
      open:    Number,
      close:   Number,
    },
    7: {
      open:    Number,
      close:   Number,
    }
  },
  images: 		{ data: Buffer, type: String },
  links: 			{ type: String }
});

var marker = mongoose.model('marker', markerSchema);

module.exports = {
  Marker : marker
};













// var markerSchema = new Schema({
//   name:        { type: String, required: true },
//   description: { type: String },
//   category:    { type: String, required: true },
//   created:     { type: Date, default: Date.now },
//   address:     { type: String },
//   latitude:    { type: Number, required: true },
//   longitude:   { type: Number, required: true },
//   weekdays: {
//     monday: {
//       open:    Number,
//       close:   Number,
//     },
//     tuesday: {
//       open:    Number,
//       close:   Number,
//     },
//     wednesday: {
//       open:    Number,
//       close:   Number,
//     },
//     thursday: {
//       open:    Number,
//       close:   Number,
//     },
//     friday: {
//       open:    Number,
//       close:   Number,
//     },
//     saturday: {
//       open:    Number,
//       close:   Number,
//     },
//     sunday: {
//       open:    Number,
//       close:   Number,
//     }
//   }
// });