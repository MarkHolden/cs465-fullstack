const index = function(req, res, next) {
    res.render('index', { title: 'Travlr Getaways' });
};

module.exports = {
    index,
}
