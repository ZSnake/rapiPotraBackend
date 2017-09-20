var localController = require('./controllers/localController');

exports.endpoints = [{method: 'POST', path: '/local', config: localController.createLocal},
    {method: 'GET', path: '/local', config: localController.getLocal},
    {method: 'PUT', path: '/local', config: localController.modifyLocal}
];