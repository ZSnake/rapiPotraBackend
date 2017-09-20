var eventoController = require('./controllers/eventoController');

exports.endpoints = [
	{method: 'GET', path: '/eventos', config: eventoController.buscarEventos},
	{method: 'GET', path: '/buscar/eventos/nombre/{nombre}', config: eventoController.buscarEventoNombre},
	{method: 'GET', path: '/buscar/eventos/fecha/{fecha}', config: eventoController.buscarEventoFecha},
	{method: 'GET', path: '/buscar/eventos/local/{nombreLocal}', config: eventoController.buscarEventoLocal},
	{method: 'GET', path: '/buscar/eventos/equipo1/{equipo1}', config: eventoController.buscarEventoEquipo1},
	{method: 'GET', path: '/buscar/eventos/equipo2/{equipo2}', config: eventoController.buscarEventoEquipo2},
	{method: 'GET', path: '/buscar/eventos/finalizado/{finalizado}', config: eventoController.buscarEventoFinalizado},
	{method: 'GET', path: '/buscar/eventos/organizador/{organizador}', config: eventoController.buscarEventoOrganizador},
  {method: 'POST', path: '/eventos', config: eventoController.crearEventos},
  {method: 'DELETE', path: '/eventos/{id}', config: eventoController.borrarEventos},
  {method: 'PUT', path: '/eventos', config: eventoController.modificarEventos}, 
];
