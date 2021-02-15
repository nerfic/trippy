var mongoose = require("mongoose");

var schema = require("./schemas").Favorite;

var Schema = new mongoose.Schema(schema);

var Model = mongoose.model("Favorite", Schema);

module.exports = Model;
