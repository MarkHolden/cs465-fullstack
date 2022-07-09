const contact = function(req, res, next) {
    res.render('contact', { title: 'Travlr Getaways' });
};

module.exports = {
    contact,
}
