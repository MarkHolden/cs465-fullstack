const fs = require('fs');
// TODO: use a service to retrieve trips rather than a json file.
const contactInfo = JSON.parse(fs.readFileSync('./data/contact.json', 'utf8'));

const contact = function(req, res, next) {
    res.render('contact', { title: 'Travlr Getaways', contact: contactInfo });
};

module.exports = {
    contact,
}
