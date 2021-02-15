var mongoose = require('mongoose');

var schema = require('./schemas').Hotel;

var Schema = new mongoose.Schema(schema);

Schema.statics.getAll = function() {
  return this.find({}, { __v: 0, created: 0 });
};

Schema.statics.getById = function(id) {
  var self = this;
  return new Promise(function(resolve, reject) {
    self
      .find({ tripAdvisorId: id }, { __v: 0, created: 0 })
      .then(function(data) {
        resolve(data[0] || {});
      })
      .catch(function(err) {
        reject(err);
      });
  });
};

var Model = mongoose.model('Hotel', Schema);

module.exports = Model;
