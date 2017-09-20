var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var LocalSchema = new mongoose.Schema({
  nombreUsuario:{type: String, unique: true},
  nombre : String,
  direccion : String,
  horarios : [Number],
  horaAbrir : Number,
  horaCerrar : Number,
  password: String,
  scope:[String]
});

LocalSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Local', LocalSchema);