var eventoController = require('./controllers/eventoController');

exports.endpoints = [{method: 'GET', path: '/', config: {handler: function(request, reply){reply('API v1, Eventos')}}},
	{method: 'GET', path: '/v1/eventos', config: eventoController.buscarEventos},
	{method: 'GET', path: '/v1/buscar/eventos/nombre/{nombre}', config: eventoController.buscarEventoNombre},
	{method: 'GET', path: '/v1/buscar/eventos/fecha/{fecha}', config: eventoController.buscarEventoFecha},
	{method: 'GET', path: '/v1/buscar/eventos/local/{nombreLocal}', config: eventoController.buscarEventoLocal},
	{method: 'GET', path: '/v1/buscar/eventos/equipo1/{equipo1}', config: eventoController.buscarEventoEquipo1},
	{method: 'GET', path: '/v1/buscar/eventos/equipo2/{equipo2}', config: eventoController.buscarEventoEquipo2},
	{method: 'GET', path: '/v1/buscar/eventos/finalizado/{finalizado}', config: eventoController.buscarEventoFinalizado},
	{method: 'GET', path: '/v1/buscar/eventos/organizador/{organizador}', config: eventoController.buscarEventoOrganizador},
  {method: 'POST', path: '/v1/eventos', config: eventoController.crearEventos},
  {method: 'DELETE', path: '/v1/eventos/{id}', config: eventoController.borrarEventos},
  {method: 'PUT', path: '/v1/eventos', config: eventoController.modificarEventos}, 
];
