var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var EventoSchema = new mongoose.Schema({
  nombre: {type: String, unique: true},
  fecha : String,
  nombreLocal : String,
  hora : Number,
  usuario : [{nombreUsuario: String, aceptado: Boolean}],
  equipo1 : String,
  equipo2 : String,
  logo1 : String,
  logo2 : String,
  video : String,
  imagen : String,
  finalizado : Boolean,
  resultado1 : Number,
  resultado2 : Number,
  organizador : String,
  resultadoGanador : Boolean
});

EventoSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Evento', EventoSchema);