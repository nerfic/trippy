var mongoose = require("mongoose");

var schema = require("./schemas").Restaurant;

var Schema = new mongoose.Schema(schema);

var Model = mongoose.model("Restaurant", Schema);

module.exports = Model;
