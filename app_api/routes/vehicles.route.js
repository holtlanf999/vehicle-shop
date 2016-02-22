var r = require('request').defaults({
		json: true
});

module.exports = function (app) {

	/*Read*/
	app.get('/vehicles', function (req, res) {
		r({uri: 'http://localhost:4003/cars'}, function (error, response, body) {
			if(!error && response.statusCode === 200) {
				res.json(body);
			} else {
				res.send(response.statusCode);
			}
		});
	});
}