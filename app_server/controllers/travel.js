const fs = require('fs');
const trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

/* GET travel page. */
const travel = function(req, res, next) {
    res.render('travel', { title: 'Travlr Getaways', trips: trips });
};

module.exports = {
    travel,
}
