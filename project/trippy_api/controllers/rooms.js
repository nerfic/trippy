const mongoose = require('mongoose')
const root = require('./root');
const Model = require('../models').Room;


const getAll = (req, res) => {
  // console.log('>> controllers/rooms#getAll');
  const maxLimit = 20;
  const defaultLimit = 10;
  const defaultSkip = 0;
  const defaultPage = 1;
  let {
    limit = defaultLimit,
    skip = defaultSkip,
    page = defaultPage
  } = req.query;

  let {
    hotelId = null
  } = req.params;

  // console.log('controllers/rooms#getAll hotelId', hotelId);

  let query = {};


  // Query parameters
  limit = parseInt(limit);
  if (isNaN(limit)) {
    limit = defaultLimit;
  }
  if (limit > maxLimit) {
    limit = maxLimit;
  }

  skip = parseInt(skip);
  if (skip < defaultSkip || isNaN(skip)) {
    skip = defaultSkip;
  }

  page = parseInt(page);
  if (page < defaultPage || isNaN(page)) {
    page = defaultPage;
    if (page !== defaultPage) {
      skip = (page - 1) * limit;
    }
  }
  // Mongo query
  if (hotelId !== null) {
    query.hotel = mongoose.Types.ObjectId(hotelId);
  }

  // console.log('controllers/rooms#getAll query', query);

  root.getPaginationDetails({
    Model,
    query,
    limit,
    page
  }).then((paginationDetails) => {
    Model.find(query, { __v: 0, created: 0 }, { limit, skip })
    .then(data => {
      // console.log('controllers/rooms#getAll #1', data.length);
      res.json({
        success: true,
        ...paginationDetails,
        results: data
      })
    })
    .catch(sendJsonError);
  })
  .catch(sendJsonError);

  // use var for simplicity reading and still be in the res object context
  var sendJsonError = (err) => {
    res.json({
      success: false,
      message: err.toString()
    });
  };
};

const getById = (req, res) => {
  const {
    roomId
  } = req.params;

  // console.log('req.params', req.params);
  // console.log('controllers/rooms#getAll req.params', req.params);

  Model.findById(roomId)
    .then((datum) => {
      res.json({
        success: true,
        result: datum
      });
    })
    .catch((err) => {
      res.json({
        success: false,
        message: err.toString()
      });
    });
};


module.exports = {
  getAll,
  getById
};