const meals = function(req, res, next) {
    res.render('meals', { title: 'Travlr Getaways' });
};

module.exports = {
    meals,
}
