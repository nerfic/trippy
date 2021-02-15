require('dotenv').config();
const mongoose = require('mongoose');
const { DB_HOST, DB_PORT, DB_NAME } = process.env;

// const { User, Hotel, Room } = require('../models');
const importUsers = require('./importers/users');
const importHotels = require('./importers/hotels');
const importRooms = require('./importers/rooms');
const updateHotels = require('./importers/updateHotels');


const connection = mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
  useNewUrlParser: true,
  useCreateIndex: true
});

importUsers((err, users) => {
  if (err !== null) {
    console.log('#importUsers err', err);
    return;
  }
  console.log(`Users: ${users.length} imported successfully`);
  importHotels((err, hotels) => {
    if (err !== null) {
      console.log('#importHotels err', err);
      return;
    }
    console.log(`Hotels: ${hotels.length} imported successfully`);
    importRooms(hotels, (err, rooms) => {
      console.log(`Rooms: ${rooms.length} imported successfully`);
      updateHotels(hotels, (err, status) => {
        if (err !== null) {
          console.log('#updateHotels err', err);
          return;
        }
        console.log(`Hotels: ${status.success}/${hotels.length} have been updated successfully`);
        mongoose.connection.close();
      });
    });
  });
});


  // .then(User.collection.drop())
  // // .then(() => {
  // //   console.log('Ok');
  // // });
  // .then(User.insertMany(usersSave))
  // .then(() => {
  //   console.log('Ok');
  // });