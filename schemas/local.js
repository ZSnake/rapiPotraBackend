var mongoose = require('mongoose');

var LocalSchema = new mongoose.Schema({
  nombre : String,
  direccion : String,
  horarios : [int],
  horaAbrir : int,
  horaCerrar : int
});

module.exports = mongoose.model('Local', LocalSchema);