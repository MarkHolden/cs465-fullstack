/* GET travel page. */
const travel = function(req, res, next) {
    res.render('travel', { title: 'Travlr Getaways' });
};

module.exports = {
    travel,
}
