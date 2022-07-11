const fs = require('fs');
// TODO: use a service to retrieve trips rather than a json file.
const aboutUs = JSON.parse(fs.readFileSync('./data/about.json', 'utf8'));

const about = function(req, res, next) {
    res.render('about', { title: 'Travlr Getaways', about: aboutUs });
};

module.exports = {
    about,
}
