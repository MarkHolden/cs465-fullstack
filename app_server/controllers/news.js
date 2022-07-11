const fs = require('fs');
// TODO: use a service to retrieve trips rather than a json file.
const newsData = JSON.parse(fs.readFileSync('./data/news.json', 'utf8'));

const news = function(req, res, next) {
    res.render('news', { title: 'Travlr Getaways', news: newsData });
};

module.exports = {
    news,
}
