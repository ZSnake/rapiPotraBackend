var evento = require('../schemas/evento');

exports.buscarEventos = {
  handler: function(request, reply){
	var eventos = evento.find({});
    reply(eventos);
  }
}

exports.buscarEventoNombre = {
  handler: function(request, reply){
	var eventos = evento.find({nombre:request.params.nombre});
    reply(eventos);
  }
}

exports.buscarEventoFecha = {
  handler: function(request, reply){
  var eventos = evento.find({fecha:request.params.fecha});
    reply(eventos);
  }
}

exports.buscarEventoLocal = {
  handler: function(request, reply){
  var eventos = evento.find({nombreLocal:request.params.nombreLocal});
    reply(eventos);
  }
}

exports.buscarEventoEquipo1 = {
  handler: function(request, reply){
  var eventos = evento.find({equipo1:request.params.equipo1});
    reply(eventos);
  }
}

exports.buscarEventoEquipo2 = {
  handler: function(request, reply){
  var eventos = evento.find({equipo2:request.params.equipo2});
    reply(eventos);
  }
}

exports.buscarEventoFinalizado = {
  handler: function(request, reply){
  var eventos = evento.find({finalizado:true});
    reply(eventos);
  }
}

exports.buscarEventoOrganizador = {
  handler: function(request, reply){
  var eventos = evento.find({organizador:request.params.organizador});
    reply(eventos);
  }
}

exports.borrarEventos = {
  handler: function(request, reply){
  var eventos = evento.find({_id:request.params.id});
    eventos.remove(function(err){
    if(err)
         return reply('No se pudo borrar el evento');
      else
         return reply('Evento Borrado');
  });
  }
}

exports.crearEventos = {
  handler: function(request, reply){
    var nuevoEvento = new evento({
      nombre: request.payload.nombre,
      fecha: request.payload.fecha,
      nombreLocal: request.payload.nombreLocal,
      equipo1: request.payload.equipo1,
      equipo2: request.payload.equipo2,
      logo1: request.payload.logo1,
      logo2: request.payload.logo2,
      video: request.payload.video,
      imagen: request.payload.imagen,
      finalizado: request.payload.finalizado,
      resultado1: request.payload.resultado1,
      resultado2: request.payload.resultado2,
      organizador: request.payload.organizador,
      resultadoGanador: request.payload.resultadoGanador
    });
    nuevoEvento.save();
    return reply('Evento Creado');
  }
}

exports.modificarEventos = {
  handler: function (request, reply) {
    if (request.query.nombre) {
      var eventos = evento.find({nombre: request.query.nombre});
      eventos.update({ $set: request.payload }, function (err) {
        if (err) {
          reply('Error al editar');
        } else {
          reply('Evento Modificado');
        }
      });
    } else {
      return reply("Ingresar nombre del Evento");
    }
  }
}