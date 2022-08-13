const express = require('express');
const router = express.Router();
const { expressjwt: jwt } = require("express-jwt");
const auth = jwt({
    secret: process.env.JWT_SECRET,
    algorithms: ["HS256"]
});

const authController = require('../controllers/authentication');
const tripsController = require('../controllers/trips');

router.route('/login')
    .post(authController.login);

router.route('/register')
    .post(authController.register);

router.route('/trips')
    .get(tripsController.list)
    .post(auth, tripsController.create);

router.route('/trips/:tripId')
    .get(tripsController.get)
    .put(auth, tripsController.update)
    .delete(auth, tripsController.remove);

module.exports = router;
