const express = require('express');
const router = express.Router();
const tripsController = require('../controllers/trips');

router.get('/trips', tripsController.list);
router.get('/trips/:tripId', tripsController.get);
router.post('/trips', tripsController.create);
router.put('/trips/:tripId', tripsController.update);
router.delete('/trips/:tripId', tripsController.remove);

module.exports = router;
