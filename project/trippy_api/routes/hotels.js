const express = require('express');
const router = express.Router();
const controller = require('../controllers').hotels;
const roomController = require('../controllers').rooms;

router.get('/', controller.getAll);
router.post('/', controller.save);

router.get('/:id', controller.getById);

router.get('/city/:city', controller.getAll);

router.get('/:hotelId/rooms/', roomController.getAll);

router.get('/:hotelId/rooms/:roomId', roomController.getById);

module.exports = router;
