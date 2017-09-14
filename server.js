var hapi = require('hapi');
var inert = require('inert');
var mongoose = require('mongoose');

//var routes = require('./routes');
var routesEvento = require('./routesEvento');
var auth = require('hapi-auth-cookie');
	
var server = new hapi.Server();
server.connection({
    port: process.env.PORT || 8000,
    routes: { cors: true }
});

mongoose.connect('mongodb://localhost:27017/RapiPotra');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error al conectarse'));
db.once('open', function callback() {
    console.log("Se ha conectado con la base de datos");
});

server.register([inert], function (err) {

    // server.auth.strategy('session', 'cookie', {
    //     password: 'secretpasswordforencryption',
    //     cookie: 'angular-scaffold-cookie',
    //     ttl: 24 * 60 * 60 * 1000, // Set session to 1 day
    //     isSecure: false
    // });

	server.route(routesEvento.endpoints);
	server.start(function () {
	    console.log('Server esta corriendo en:', server.info.uri);
	});

    //server.route(routes.endpoints);
    //server.start(function () {
      //  console.log('Server esta corriendo en:', server.info.uri);
    //});
});