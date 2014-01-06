'use strict';

var mongoose = require('mongoose'),
    check = require('validator').check,
    Schema = mongoose.Schema;

// Schema
var ServiceSchema = new Schema({
  name: String,
  info: String,
  url: String
});

// Validations
ServiceSchema.path('url').validate(function (url) {
  // check(url, 'Please enter a valid email').isEmail();
}, 'A service URL must be valid');

mongoose.model('Service', ServiceSchema);
