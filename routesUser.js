var userController = require('./controllers/userController');

exports.endpoints = [{method: 'GET', path: '/', config: {handler: function(request, reply){reply('API v1, RapiPotra')}}},
	{method: 'POST', path: '/createUser', config: userController.createUser},
    {method: 'GET', path: '/users', config: userController.getUsers},
    {method: 'PUT', path: '/addFriend', config: userController.addFriend},
    {method: 'PUT', path: '/modifyFriend', config: userController.modifyUser},
    {method: 'DELETE', path: '/deleteUser', config: userController.deleteUser}
];
