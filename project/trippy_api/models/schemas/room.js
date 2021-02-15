var mongoose = require("mongoose");
module.exports = {
  people: Number,
  price: Number,
  isBathroom: Boolean,
  hotel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hotel"
  },
  created: {
    type: Date,
    default: Date.now
  }
};
