const getRandomInt = require('../utils/getRandomInt');

const getFakeRoom = (hotelId, basePrice, priceCategory = 1) => {
  return {
    people: getRandomInt(1, 6),
    price: getRandomInt(basePrice, basePrice + 200 * priceCategory),
    isBathroom: getRandomInt(0, 3) < 3,
    hotel: hotelId
  }  
};

module.exports = getFakeRoom;