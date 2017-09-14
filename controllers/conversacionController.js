var conversacion = require('../schemas/conversacion');


exports.getConversacion = {
    handler: function (request, reply) {
        var conversaciones = conversacion.find(request.query);
        reply(conversaciones);
    }
}

exports.createConversacion = {
    handler: function (request, reply) {
        var nuevaConversacion = new conversacion({
            user1: request.payload.user1,
            user2: request.payload.user2,
            conversacion:[]
        });
        nuevaConversacion.save();
        return reply('Conversacion Creada');
    }
}

exports.deleteConversacion = {
    handler: function (request, reply) {
    if (request.query._id != undefined) {
      var conversaciones = conversacion.find({_id:request.query._id});
      conversaciones.remove(function (err) {
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

exports.modifyConversacion = {
  handler: function (request, reply) {
    if (request.query.user1) {
      var conversaciones = conversacion.find({ user1: request.query.user1, user2:request.query.user2 });
      console.log(request.query.user1);
      console.log(request.query.user2);
      console.log(request.payload);
      conversaciones.update({ $set: request.payload }, function (err) {
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
