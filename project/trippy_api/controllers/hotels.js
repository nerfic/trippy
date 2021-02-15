const root = require('./root');
const Model = require('../models').Hotel;
const Schema = require('../models/schemas').Hotel;

const citiesLocation = {
  paris: {
    lat: 48.8588376,
    lon: 2.3368486,
    zoom: 12
  },
  nice: {
    lat: 43.703169,
    lon: 7.2526055,
    zoom: 13
  },
  london: {
    lat: 51.4985161,
    lon: -0.1219834,
    zoom: 12
  },
  rome: {
    lat: 41.889943,
    lon: 12.4856124,
    zoom: 11
  },
  'new-york': {
    lat: 40.7369361,
    lon: -73.9904193,
    zoom: 12
  }
};

const getAll = (req, res) => {
  // console.log('>> controllers/hotels#getAll');
  const maxLimit = 20;
  const defaultLimit = 10;
  const defaultSkip = 0;
  const defaultPage = 1;
  let {
    limit = defaultLimit,
    skip = defaultSkip,
    page = defaultPage,
    priceCategory = null,
    priceMin = null,
    priceMax = null,
    stars = null,
    lat = null,
    lon = null,
    commodities = null,
    sort = null,
    sortOrder = null
  } = req.query;

  let { city = '' } = req.params;

  let sortQuery = {};
  let query = {};
  let cityLocation = {
    lat: 0,
    lon: 0,
    zoom: 1
  };

  // Query parameters
  limit = parseInt(limit);
  if (isNaN(limit)) {
    limit = defaultLimit;
  }
  if (limit > maxLimit) {
    limit = maxLimit;
  }

  skip = parseInt(skip);
  if (skip < defaultSkip || isNaN(skip)) {
    skip = defaultSkip;
  }

  page = parseInt(page);
  if (page < defaultPage || isNaN(page)) {
    page = defaultPage;
  }
  if (page !== defaultPage) {
    skip = (page - 1) * limit;
  }

  // Mongo query
  if (city.length !== 0) {
    query.city = city;
    const cities = Schema.city.enum;
    if (cities.includes(city) === false) {
      res.json({
        success: false,
        message: `The city ${city} is not part of the available cities. [${cities.join(
          ', '
        )}]`
      });
      return;
    }
    cityLocation = {
      center: {
        lat: citiesLocation[city].lat,
        lon: citiesLocation[city].lon
      },
      zoom: citiesLocation[city].zoom
    };
    // console.log('controllers/hotels#getAll city', city);
    // console.log('controllers/hotels#getAll cityLocation', cityLocation);
  }

  if (priceCategory !== null) {
    const priceCat = parseInt(priceCategory);
    if (isNaN(priceCat) === false && priceCat <= 3 && priceCat >= 1) {
      query.priceCategory = priceCat;
    }
  }

  if (priceMin !== null) {
    const minimumPrice = parseInt(priceMin);
    if (isNaN(minimumPrice) === false) {
      query.price = {
        $gte: minimumPrice
      };
    }
  }

  if (priceMax !== null) {
    const maximumPrice = parseInt(priceMax);
    if (isNaN(maximumPrice) === false) {
      if (query.hasOwnProperty('price') === false) {
        query.price = {};
      }
      query.price['$lte'] = maximumPrice;
    }
  }

  if (stars !== null) {
    const starsNumber = parseInt(stars);
    if (isNaN(starsNumber) === false) {
      query.stars = {
        $gte: starsNumber
      };
    }
  }

  if (commodities !== null) {
    const arrCommodities = commodities.split(',');
    query.commodities = {
      $all: arrCommodities
    };
  }

  if (sort !== null) {
    const sortableFields = ['price', 'stars'];
    if (sortableFields.includes(sort) === true) {
      let sortingOrder = parseInt(sortOrder);
      if (
        isNaN(sortingOrder) === true ||
        (sortingOrder !== 1 && sortingOrder !== -1)
      ) {
        sortingOrder = 1;
      }
      sortQuery = {
        [sort]: sortingOrder
      };
    }
  }

  // console.log('controllers/hotels#getAll query', query);
  // console.log('controllers/hotels#getAll limit', limit);
  // console.log('controllers/hotels#getAll skip', skip);
  // console.log('controllers/hotels#getAll sortQuery', sortQuery);

  root
    .getPaginationDetails({
      Model,
      query,
      limit,
      page
    })
    .then(paginationDetails => {
      Model.find(
        query,
        { __v: 0, created: 0 },
        { limit, skip, sort: sortQuery }
      )
        .then(data => {
          // console.log('controllers/hotels#getAll #1');
          res.json({
            success: true,
            ...paginationDetails,
            ...cityLocation,
            results: data
          });
        })
        .catch(sendJsonError);
    })
    .catch(sendJsonError);

  // use var for simplicity reading and still be in the res object context
  var sendJsonError = err => {
    res.json({
      success: false,
      message: err.toString()
    });
  };
};

const getById = (req, res) => {
  const { id } = req.params;

  Model.findById(id)
    .then(datum => {
      res.json({
        success: true,
        result: datum
      });
    })
    .catch(err => {
      res.json({
        success: false,
        message: err.toString()
      });
    });
};

const save = function(req, res) {
  var body = req.body;
  console.log('body', body);
  Model.create(body)
    .then(function(datum) {
      res.json({
        success: true,
        result: datum
      });
    })
    .catch(function(err) {
      res.json({
        success: false,
        message: err.toString()
      });
    });
};

module.exports = {
  getAll,
  getById,
  save
};
