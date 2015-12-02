'use strict';

var mongoose = require('mongoose'),
  	Schema = mongoose.Schema,
  	date = new Date();

var markerSchema = new Schema({
  name:        { type: String, required: true },
  description: { type: String },
  category:    { type: String, required: true },
  subcategory: { type: String },
  address:     { type: String },
  rating:      { type: Number },
  created:     { type: Date, default: date.getTime() },
  created:     { type: Date, default: date.getTime() },
  latitude:    { type: Number, required: true },
  longitude:   { type: Number, required: true },
  images:      { data: Buffer, type: String },
  links:       { type: String },
  
  open_1:       Number,
  close_1:      Number,
  open_2:       Number,
  close_2:      Number,
  open_3:       Number,
  close_3:      Number,
  open_4:       Number,
  close_4:      Number,
  open_5:       Number,
  close_5:      Number,
  open_6:       Number,
  close_6:      Number,
  open_7:       Number,
  close_7:      Number
  
});

var marker = mongoose.model('marker', markerSchema);

module.exports = {
  Marker : marker
};