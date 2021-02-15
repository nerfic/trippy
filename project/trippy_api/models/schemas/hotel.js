var mongoose = require('mongoose');
module.exports = {
  name: String,
  address: String,
  city: {
    type: String,
    enum: ['nice', 'paris', 'rome', 'new-york', 'london']
  },
  country: String,
  phone: String,
  website: String,
  email: String,
  location: {
    lat: Number,
    lon: Number
  },
  commodities: {
    type: [String],
    enum: [
      'wifi',
      'bar',
      'swimming pool',
      'restaurant',
      'parking',
      'breakfast',
      'animals',
      'spa',
      'golf',
      'disabled',
      'tv',
      'air conditioning',
      'non smoking',
      'smoking',
      'dry cleaning',
      'multilingual staff',
      'laundry',
      'suites',
      'disabled access',
      'meeting rooms',
      'minibar',
      'family',
      'breakfast included',
      'conciergerie',
      'shuttle',
      'gym',
      'room service'
    ]
  },
  tripAdvisorId: String,
  stars: Number,
  isEditorChoice: Boolean,
  pictures: [String],
  price: Number,
  priceCategory: Number, // between 1 and 3 : 1 - cheap, 2 - moderate, 3 - expensive
  rooms: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Room'
    }
  ],
  created: {
    type: Date,
    default: Date.now
  }
};
