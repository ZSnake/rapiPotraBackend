var local = require('../schemas/local');
var boom = require('boom');
var bcrypt = require('bcrypt')

exports.getLocal = {
    handler: function (request, reply) {
        var locals = local.find(request.query);
        reply(locals);
    }
}

exports.createLocal = {
    handler: function (request, reply) {
        bcrypt.hash(request.payload.password, 10, function (err, hash) {
            if (err)
                return reply(boom.notAcceptable('Error encrypting password'));
            var newLocal = new local({
                nombreUsuario: request.payload.nombreUsuario,
                password: hash,
                scope: request.payload.scope,
                nombre: request.payload.nombre,
                direccion : "",
                horarios : [],
                horaAbrir : 0,
                horaCerrar : 0,
            });
            newLocal.save(function (err) {
                if (err) {
                    return reply(boom.notAcceptable('Username must be unique: ' + err));
                } else {
                    return reply('Usuario creado exitosamente');
                };
            });
        })
    }
}

exports.modifyLocal = {
  handler: function (request, reply) {
    if (request.query.nombreUsuario) {
      var locales = local.find({ nombreUsuario: request.query.nombreUsuario });
      locales.update({ $set: request.payload }, function (err) {
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

exports.deleteLocal = {
  handler: function (request, reply) {
    if (request.query.nombreUsuario != undefined) {
      var locales = local.find({ nombreUsuario: request.query.nombreUsuario });
      locales.remove(function (err) {
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