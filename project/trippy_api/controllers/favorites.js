const Model = require('../models').Favorite;

const getByUserId = (req, res) => {
  const {
    hotelId = null,
    restaurantId = null,
    userId = null
  } = req.params;

  if (userId === null || (hotelId === null && restaurantId === null)) {
    res.json({
      success: false,
      message: 'One of this route needs to be fulfill: users/:userId/hotels/:hotelId/favorites/ or users/:userId/hotels/:hotelId/favorites/'
    });
    return;
  }

  let query = {
    user: userId
  };

  if (hotelId !== null) {
    query.hotel = hotelId;
  }

  if (restaurantId !== null) {
    query.restaurant = restaurantId;
  }

  Model.findOne(query)
    .then((favorite) => {
      res.json({
        success: true,
        result: favorite || {}
      })
    })
    .catch((err) => {
      res.json({
        success: false,
        result: err.toString()
      })
    })

};

const updateById = (req, res) => {
  const {
    hotelId = null,
    restaurantId = null,
    userId = null
  } = req.params;

  if (hotelId === null && restaurantId === null) {
    res.json({
      success: false,
      message: 'One of this route needs to be fulfill: /favorites/hotels/:id or /favorites/restaurants/:id'
    });
    return;
  }

  let query = {
    user: userId
  };

  if (hotelId !== null) {
    query.hotel = hotelId;
  }

  if (restaurantId !== null) {
    query.restaurant = restaurantId;
  }

  console.log('controllers/favorites#updateById query', query);

  Model.find(query)
    .then((favorite) => {
      console.log('controllers/favorites#updateById #1', favorite);
      if (favorite.length === 0) {
        console.log('controllers/favorites#updateById #2');
        const fav = new Model({
          isFavorite: true,
          hotel: hotelId,
          restaurant: restaurantId,
          user: userId
        });
        console.log('controllers/favorites#updateById #3');
        fav.save()
        res.json({
          success: true,
          result: fav
        });
        console.log('controllers/favorites#updateById #4');
        return;
      }
      console.log('controllers/favorites#updateById #4-2', favorite);
      console.log('controllers/favorites#updateById #4-2-1', typeof favorite[0].isFavorite);
      const updateQuery = { isFavorite: favorite[0].isFavorite === true ? false : true };
      const opts = { useFindAndModify: false };
      console.log('controllers/favorites#updateById #4-3', updateQuery);
      Model.findOneAndUpdate(query, updateQuery, opts)
        .then((favorite) => {
          console.log('controllers/favorites#updateById #5', favorite);
          const result = favorite;
          result.isFavorite = updateQuery.isFavorite;
          res.json({
            success: true,
            result
          })
          console.log('controllers/favorites#updateById #6');
        })
        .catch(sendJsonError)
      // res.json({
      //   success: true,
      //   result: favorite
      // });
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

module.exports = {
  updateById,
  getByUserId
};