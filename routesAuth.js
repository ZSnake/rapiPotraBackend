var authController = require('./controllers/authController');

exports.endpoints = [
	{method: 'POST', path: '/login', config: authController.login},
	{method: 'POST', path: '/loginLocal', config: authController.loginLocal},
	{method: 'GET', path: '/logout', config: authController.logout}
];