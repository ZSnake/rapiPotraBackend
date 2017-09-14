var user = require('../schemas/usuario');
var boom = require('boom');
var bcrypt = require('bcrypt');

exports.getUsers = {
    handler: function (request, reply) {
        var users = user.find(request.query);
        reply(users);

    }
}
exports.createUser = {
    auth: {
      mode:'try',
      strategy:'session'
    },
    handler: function (request, reply) {
        bcrypt.hash(request.payload.password, 10, function (err, hash) {
            if (err)
                return reply(boom.notAcceptable('Error encrypting password'));
            var newUser = new user({
                nombreUsuario: request.payload.nombreUsuario,
                password: hash,
                scope: request.payload.scope,
                nombre: request.payload.nombre,
                apellido: request.payload.apellido,
                eventosCreados: [],
                eventosInvitaciones: [],
                amigos: [],
                localesFavoritos: [],
                imagen: "",
                activo: true
            });
            console.log(newUser);
            newUser.save(function (err) {
                if (err) {
                    return reply(boom.notAcceptable('Username must be unique: ' + err));
                } else {
                    return reply('Usuario creado exitosamente');
                };
            });
        })
    }
}

exports.modifyUser = {
  handler: function (request, reply) {
    if (request.query.nombreUsuario) {
      var socks = sock.find({ nombreUsuario: request.query.nombreUsuario });
      socks.update({ $set: request.payload }, function (err) {
        if (err) {
          reply('no se edito');
        } else {
          reply('se edito con exito');
        }
      });
    } else {
      return reply("Ingresar un nombre");
    }

  }
}

exports.addFriend = {
    handler: function (request, reply) {
        user.findOne({nombreUsuario:request.payload.nombreUsuario}, function (err, user1) {
            if (err) {
                return handleError(err);
            } else {
                user1.amigos.push({nombreUsuario:request.payload.amigo, favorito:false});
                user1.save();
            }
        });

        user.findOne({nombreUsuario:request.payload.amigo}, function (err, amigo) {
            if (err) {
                return handleError(err);
            } else {
                amigo.amigos.push({nombreUsuario:request.payload.nombreUsuario, favorito:false});
                amigo.save();
                return reply('amigo agregado');
            }
        });
    }
}

exports.deleteUser = {
  handler: function (request, reply) {
    if (request.query.nombreUsuario != undefined) {
      var users = user.find({ nombreUsuario: request.query.nombreUsuario });
      users.remove(function (err) {
        if (err) {
          reply('not deleted');
        } else {
          reply('deleted');
        }
      });
    } else {
      return reply("Ingresar un nombre");
    }
  }
}

exports.deleteAccount = {
  handler: function (request, reply) {
    if (request.query.nombreUsuario != undefined) {
      var users = user.find({ nombreUsuario: request.query.nombreUsuario });
      users.update({activo:false});
    } else {
      return reply("Ingresar un nombre");
    }
  }
}