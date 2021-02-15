const express = require('express');
const router = express.Router();
const controller = require('../controllers').users;
const favoritesController = require('../controllers').favorites;

router.get('/:id', controller.getById);

router.post('/login', controller.login);

router.post('/signup', controller.signup);

router.get('/:userId/hotels/:hotelId/favorites', favoritesController.getByUserId);
router.put('/:userId/hotels/:hotelId/favorites/toggle', favoritesController.updateById);

router.get('/:userId/restaurants/:restaurantId/favorites', favoritesController.getByUserId);
router.put('/:userId/restaurants/:restaurantId/favorites/toggle', favoritesController.updateById);

module.exports = router;