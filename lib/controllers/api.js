'use strict';

var mongoose = require('mongoose'),
    Service = mongoose.model('Service'),
    async = require('async');

exports.availableServices = function(req, res) {
  return Service.find(function (err, things) {
    if (!err) {
      return res.json(things);
    } else {
      return res.send(err);
    }
  });
};
