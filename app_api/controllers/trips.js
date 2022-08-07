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
    console.log(req);
    console.log(req.body);
    // model.create(req.body)
    //     .exec((err, trips) => {
    //         if (!trips) {
    //             return res.status(404)
    //                 .json({ "message": "no trips found." });
    //         } else if (err) {
    //             return res.status(500)
    //                 .json(err);
    //         } else {
    //             return res.status(201)
    //                 .json(trips);
    //         }
    //     });
};

// PUT: /trips/:tripId Updates a trip.
const update = async (req, res) => {
    console.log(req);
    console.log(req.body);
    model.find({ 'code': req.params.tripId })
        .exec((err, trips) => {
            if (!trips) {
                return res.status(404)
                    .json({ "message": "no trips found." });
            } else if (err) {
                return res.status(500)
                    .json(err);
            } else {
                model.updateOne({ 'code': req.params.tripId }, req.body)
                    .exec((err, trip) => {
                        if (err) {
                            return res.status(500)
                                .json(err);
                        } else {
                            return res.status(200)
                                .json(trip);
                        }
                    });
            }
        });
    // model.create(req.body)
    //     .exec((err, trips) => {
    //         if (!trips) {
    //             return res.status(404)
    //                 .json({ "message": "no trips found." });
    //         } else if (err) {
    //             return res.status(500)
    //                 .json(err);
    //         } else {
    //             return res.status(200)
    //                 .json(trips);
    //         }
    //     });
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