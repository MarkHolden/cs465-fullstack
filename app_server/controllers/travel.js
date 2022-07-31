const { response } = require('express');
const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
};

const travel = function(req, res, next) {
    const path = '/api/trips';
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {},
    };
    console.info(`>> travel controller travel fn calling ${requestOptions.url}.`);
    request(requestOptions, (err, { statusCode }, body) => {
        if (err) {
            console.error(err);
        }

        renderTravelList(req, res, body);
    });
};

const renderTravelList = function (req, res, body) {
    let message = null;
    if (!(body instanceof Array)) {
        message = 'API lookup error';
    } else if (!body.length) {
        message = 'No trips exist in the system.';
    }

    res.render('travel', {
        title: `${process.env.npm_package_description} - Travel`,
        trips: body,
        message,
    });
};

module.exports = {
    travel,
}
