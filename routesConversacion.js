var conversacionController = require('./controllers/conversacionController');

exports.endpoints = [
	{method: 'GET', path: '/conversacion', config: conversacionController.getConversacion},
	{method: 'POST', path: '/conversacion', config: conversacionController.createConversacion},
	{method: 'PUT', path: '/conversacion', config: conversacionController.modifyConversacion},
	{method: 'DELETE', path: '/conversacion', config: conversacionController.deleteConversacion}
];