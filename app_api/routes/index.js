const express = require('express');
const router = express.Router();
const tripsController = require('../controllers/trips');

router.route('/trips')
    .get(tripsController.list)
    .post(tripsController.create);

router.route('/trips/:tripId')
    .get(tripsController.get)
    .put(tripsController.update)
    .delete(tripsController.remove);

module.exports = router;
