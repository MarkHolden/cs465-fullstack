const express = require('express');
const router = express.Router();
const tripsController = require('../controllers/trips');

router.get('/trips', tripsController.list);
router.get('/trips/:tripId', tripsController.get);

module.exports = router;
