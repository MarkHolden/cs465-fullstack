const about = function(req, res, next) {
    res.render('about', { title: 'Travlr Getaways' });
};

module.exports = {
    about,
}
