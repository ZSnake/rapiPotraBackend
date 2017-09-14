var mongoose = require('mongoose');

var EventoSchema = new mongoose.Schema({
  nombre: String,
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

module.exports = mongoose.model('Evento', EventoSchema);