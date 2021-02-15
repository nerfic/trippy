var mongoose = require("mongoose");

var schema = require("./schemas").Room;

var Schema = new mongoose.Schema(schema);

var Model = mongoose.model("Room", Schema);

module.exports = Model;
