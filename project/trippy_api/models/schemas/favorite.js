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
  isFavorite: {
    type: Boolean,
    default: false
  },
  created: {
    type: Date,
    default: Date.now
  }
};
