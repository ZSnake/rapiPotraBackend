var mongoose = require('mongoose');

var EventoSchema = new mongoose.Schema({
  fecha : int,
  nombreLocal : String,
  hora : int,
  usuario : [{nombre: String, aceptado: boolean}],
  equipo1 : String,
  equipo2 : String,
  logo1 : String,
  logo2 : String,
  video : String,
  imagen : String,
  finalizado : boolean,
  resultado1 : int,
  resultado2 : int,
  organizador : String,
  resultadoGanador : boolean
});

module.exports = mongoose.model('Evento', EventoSchema);