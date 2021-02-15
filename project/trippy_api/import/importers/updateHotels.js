const { Hotel, Room } = require('../../models');

const updateCount = {
  failure: 0,
  success: 0
};

const updateDb = (hotels, cb) => {
  Promise.all(hotels.map(updateHotel))
    .then(statuses => {
      // console.log('statuses', statuses);
      statuses.forEach(s => {
        const key = s ? 'success' : 'failure';
        updateCount[key] = updateCount[key] + 1;
      });
      // console.log('updateCount', updateCount);
      cb(null, updateCount);
    });
};

const updateHotel = (hotel) => new Promise((resolve) => {
  const roomQuery = {
    hotel: hotel._id
  };
  const roomQueryFields = {
    _id : 1
  };
  Room.find(roomQuery, roomQueryFields)
  .then(rooms => {
    // console.log('rooms', rooms);
    const roomIds = rooms.map(r => r._id);
    const hotelQuery = {
      _id: hotel._id
    };
    const hotelQueryFields = {
      rooms : roomIds
    };
    Hotel.updateOne(hotelQuery, hotelQueryFields)
      .then(() => resolve(true))
      .catch(() => {
        console.log('importers/updateHotels #updateHotel Hotel.updateOne err', err);
        resolve(false)
      });
  })
  .catch(err => {
    console.log('importers/updateHotels #updateHotel Room.find err', err);
    resolve(false);
  });
});

module.exports = updateDb;