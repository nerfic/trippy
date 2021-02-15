const express = require('express');
const router = express.Router();
const hotelsRoute = require('./admin/hotels');

console.log('hotelsRoute', hotelsRoute);

router.use('/hotels', hotelsRoute);

module.exports = router;
