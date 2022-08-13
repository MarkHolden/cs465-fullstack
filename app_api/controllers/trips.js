const mongoose = require('mongoose');
const Trip = mongoose.model('trips');

const usersController = require('../controllers/user');

// GET: /trips - lists all trips.
const list = async (_req, res) => {
    Trip.find({})
        .exec((err, trips) => executionHandler(err, res, trips, "No trips found."));
};

// GET: /trips/:tripId - get trip by id.
const get = async (req, res) => {
    Trip.findOne({ 'code': req.params.tripId })
        .exec((err, trips) => executionHandler(err, res, trips, `Trip not found with the id ${req.params.tripId}`));
};

// POST: /trips Creates a trip.
const create = async (req, res) => {
    usersController.validate(req, res, () => {
        Trip.create(req.body)
            .then((trip) => {
                return res.status(201)
                    .json(trip);
            }).catch((err) => {
                return res.status(500)
                    .json(err);
            });
    });
};

// PUT: /trips/:tripId Updates a trip.
const update = async (req, res) => {
    usersController.validate(req, res, () => {
        Trip.findOneAndUpdate({ 'code': req.params.tripId }, {
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description
        }, { new: true })
            .then(trip => {
                if (!trip) {
                    return res
                        .status(404)
                        .send({
                            message: "Trip not found with code "
                                + req.params.tripId
                        });
                }
                res.send(trip);
            }).catch(err => {
                if (err.kind === 'ObjectId') {
                    return res
                        .status(404)
                        .send({
                            message: "Trip not found with code "
                                + req.params.tripId
                        });
                }
                return res
                    .status(500) // server error
                    .json(err);
            });
    });
};

// GET: /trips/:tripId - get trip by id.
const remove = async (req, res) => {
    usersController.validate(req, res, () => {
        Trip.deleteOne({ 'code': req.params.tripId })
            .exec((err, trips) => executionHandler(err, res, trips, `Trip not found with the id ${req.params.tripId}`));
    });
};

const executionHandler = (err, res, result, notFoundMessage) => {
    if (!result) {
        return res.status(404)
            .json({ "message": notFoundMessage });
    } else if (err) {
        return res.status(500)
            .json(err);
    } else {
        return res.status(200)
            .json(result);
    }
};

module.exports = {
    list,
    get,
    create,
    update,
    remove,
};