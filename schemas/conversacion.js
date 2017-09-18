var mongoose = require('mongoose');

var conversacionSchema = new mongoose.Schema({
  user1 : String,
  user2 : String,
  mensajes : [{de:String, contenido:String}],
});

module.exports = mongoose.model('Conversacion', conversacionSchema);