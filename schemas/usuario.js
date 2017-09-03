var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var UsuarioSchema = new mongoose.Schema({
  nombreUsuario: {type: String, unique: true}, 
  nombre : String,
  apellido : String,
  eventosCreados : [String],
  eventosInvitaciones : [String],
  amigos : [String],
  amigosFavoritos : [String],
  localesFavoritos : [String],
  imagen : String,
  activo : boolean
});

UsuarioSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Usuario', UsuarioSchema);