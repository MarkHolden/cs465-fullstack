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

module.exports = {
    list,
    get,
};