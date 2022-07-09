const fs = require('fs');
// TODO: use a service to retrieve trips rather than a json file.
const trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

/* GET travel page. */
const travel = function(req, res, next) {
    res.render('travel', { title: 'Travlr Getaways', trips: trips });
};

module.exports = {
    travel,
}
