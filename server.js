var hapi = require('hapi');
var inert = require('inert');
var mongoose = require('mongoose');

//routes
var routesEvento = require('./routesEvento');
var routesUser = require('./routesUser');
var routesAuth = require('./routesAuth');
var routesConversacion = require('./routesConversacion');
var routesLocal = require('./routesLocal')
var routes = routesUser.endpoints.concat(routesEvento.endpoints);
routes = routes.concat(routesAuth.endpoints);
routes = routes.concat(routesConversacion.endpoints);
routes = routes.concat(routesLocal.endpoints);

var auth = require('hapi-auth-cookie');

var server = new hapi.Server();

server.connection({
    port: process.env.PORT || 8000,
    routes: { cors: true }
});

var io = require('socket.io')(server.listener);

mongoose.connect('mongodb://mongodb://felix:felix@ds141534.mlab.com:41534/rapipotra');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error al conectarse'));
db.once('open', function callback() {
    console.log("Se ha conectado con la base de datos");
});

server.register([inert, auth], function (err) {

    server.auth.strategy('session', 'cookie', {
        password: 'secretpasswordforencryption',
        cookie: 'angular-scaffold-cookie',
        ttl: 24 * 60 * 60 * 1000, // Set session to 1 day
        isSecure: false
    });
    server.route(routes);
    io.on('connection', function (socket) {
        console.log('a user connected');
        socket.on('disconnect', function () {
            console.log('user disconnected');
        });
        socket.on('getMessage', function (msg) {
            console.log('getMessage: ' + msg);
            socket.send(msg);
        });
    });
    server.start(function () {
        console.log('Server esta corriendo en:', server.info.uri);
    });

});