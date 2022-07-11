const fs = require('fs');
// TODO: use a service to retrieve trips rather than a json file.
const roomData = JSON.parse(fs.readFileSync('./data/rooms.json', 'utf8'));

const rooms = function(req, res, next) {
    res.render('rooms', { title: 'Travlr Getaways', rooms: roomData });
};

module.exports = {
    rooms,
}
