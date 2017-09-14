var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var UsuarioSchema = new mongoose.Schema({
  nombreUsuario: {type: String, unique: true}, 
  password : String,
  scope : [String],
  nombre : String,
  apellido : String,
  eventosCreados : [String],
  eventosInvitaciones : [String],
  amigos : [{nombreAmigo:String,favorito:Boolean}],
  amigosFavoritos : [String],
  localesFavoritos : [String],
  imagen : String,
  activo : Boolean
});


UsuarioSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Usuario', UsuarioSchema);