const fs = require('fs');
// TODO: use a service to retrieve trips rather than a json file.
const mealData = JSON.parse(fs.readFileSync('./data/meals.json', 'utf8'));

const meals = function(req, res, next) {
    res.render('meals', { title: 'Travlr Getaways', meals: mealData });
};

module.exports = {
    meals,
}
