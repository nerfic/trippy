const rawData = require('../fixtures/hotels.json');

const { Hotel } = require('../../models');
const Model = Hotel;

const importDb = (cb) => {
  Model.collection.dropIndexes((err) => {
    if (err) {
      console.log('importers/hotels err#dropIndexes', err);
    }
    Model.deleteMany({}, (err) => {
      if (err) {
        console.log('importers/hotels err#drop', err);
      }
      Model.insertMany(rawData, (err, data) => {
        if (err !== null) {
          console.log('importers/hotels err#insertMany', err);
          cb(err);
          return;
        }
        // console.log('users.length', users.length);
        // mongoose.connection.close();
        cb(null, data);
      });
        // mongoose.connection.close();
    })
    // mongoose.connection.close();
  });
};

module.exports = importDb;