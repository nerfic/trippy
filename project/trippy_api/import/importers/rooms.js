const { Room } = require('../../models');
const Model = Room;
const _ = require('lodash');

const getRandomInt = require('../utils/getRandomInt');
const getFakeRoom = require('../rooms/getFakeRoom');


const importDb = (hotels, cb) => {
  Model.collection.dropIndexes((err) => {
    if (err) {
      console.log('importers/hotels err#dropIndexes', err);
    }
    Model.deleteMany({}, (err) => {
      if (err) {
        console.log('importers/hotels err#drop', err);
      }
      Promise.all(hotels.map(addRoomsToHotel))
        .then((rooms) => {
          // console.log('ok#1');
          cb(null, _.flatten(rooms));
        })
        .catch((err) => {
          // console.log('ok#2');
          cb(err);
        });
      // mongoose.connection.close();
    })
    // mongoose.connection.close();
  });
};

const addRoomsToHotel = (hotel) => {
  // console.log('addRooms #2');
  const totalRooms = getRandomInt(30, 200);
  const rooms = [];
  while (rooms.length < totalRooms) {
    rooms.push(getFakeRoom(hotel._id, hotel.price, hotel.priceCategory));
  }
  return Model.insertMany(rooms);
};

module.exports = importDb;