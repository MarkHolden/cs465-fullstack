const fs = require('fs');
// TODO: use a service to retrieve trips rather than a json file.
const featured_links = JSON.parse(fs.readFileSync('./data/featured-links.json', 'utf8'));
const blogs = JSON.parse(fs.readFileSync('./data/blogs.json', 'utf8'));

const index = function(req, res, next) {
    res.render('index', { title: 'Travlr Getaways', featured_links: featured_links, blogs: blogs });
};

module.exports = {
    index,
}
