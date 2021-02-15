var mongoose = require("mongoose");
module.exports = {
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  hotel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hotel"
  },
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant"
  },
  comment: String,
  score: Number,
  created: {
    type: Date,
    default: Date.now
  }
};
