const mongoose = require('mongoose');
const User = mongoose.model('users');

// validate user for a request.
const validate = async (req, res, callback) => {
    if (!req.auth || !req.auth.email) {
        return res.status(404)
            .json({ "Message": "User not found." });
    }

    User.findOne({ 'email': req.auth.email })
        .exec((err, user) => {
            if (!user) {
                return res.status(404)
                    .json({ "Message": "User not found." });
            } else if (err) {
                return res.status(500)
                    .json(err);
            } else {
                callback(req, res, user.name)
            }
        });
};

module.exports = {
    validate,
};