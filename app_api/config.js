module.exports = {
	'secret': 'secret_jwt_authentication_with_node_and_angular',
	'database': 'mongodb://localhost/vshopDB',

	/*Server main Routes*/
	'userServer': 'http://localhost:4001',
	'carServer': 'http://localhost:4002',
	'bikeServer': 'http://localhost:4003',

	/*Server Sub Routes*/

	'userRoute': '/user',
	'bikeRoute': '/bike',
	'carRoute': '/car',
	'mainRoute': '/main',
	'logRoute': '/login'
}