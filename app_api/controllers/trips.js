const mongoose = require('mongoose');
const model = mongoose.model('trips');

// GET: /trips - lists all trips.
const list = async (req, res) => {
    model.find({})
        .exec((err, trips) => {
            if (!trips) {
                return res.status(404)
                    .json({ "message": "no trips found." });
            } else if (err) {
                return res.status(500)
                    .json(err);
            } else {
                return res.status(200)
                    .json(trips);
            }
        });
};

// GET: /trips/:tripId - get trip by id.
const get = async (req, res) => {
    model.find({ 'code': req.params.tripId })
        .exec((err, trips) => {
            if (!trips) {
                return res.status(404)
                    .json({ "message": "no trips found." });
            } else if (err) {
                return res.status(500)
                    .json(err);
            } else {
                return res.status(200)
                    .json(trips);
            }
        });
};

// POST: /trips Creates a trip.
const create = async (req, res) => {
    model.create(req.body)
        .then((trip) => {
            return res.status(201)
                .json(trip);
        }).catch((err) => {
            return res.status(500)
                .json(err);
        });
};

// PUT: /trips/:tripId Updates a trip.
const update = async (req, res) => {
    model
        .findOneAndUpdate({ 'code': req.params.tripId }, {
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
};

// GET: /trips/:tripId - get trip by id.
const remove = async (req, res) => {
    model.deleteOne({ 'code': req.params.tripId })
        .exec((err, trips) => {
            if (!trips) {
                return res.status(404)
                    .json({ "message": "no trips found." });
            } else if (err) {
                return res.status(500)
                    .json(err);
            } else {
                return res.status(200) // TODO: Maybe 204 here
                    .json(trips);
            }
        });
};

module.exports = {
    list,
    get,
    create,
    update,
    remove,
};