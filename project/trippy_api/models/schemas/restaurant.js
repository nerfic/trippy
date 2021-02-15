var mongoose = require("mongoose");
module.exports = {
  name: String,
  address: String,
  city: String,
  country: String,
  phone: String,
  website: String,
  email: String,
  openingHour: Date,
  closingHour: Date,
  openingDays: [String],
  location: {
    lat: Number,
    lon: Number
  },
  cuisine: [String],
  pictures: [String],
  stars: Number,
  isEditorChoice: Boolean,
  priceRange: Number, // between 1 and 3 : 1 - cheap, 2 - moderate, 3 - expensive
  created: {
    type: Date,
    default: Date.now
  }
};
