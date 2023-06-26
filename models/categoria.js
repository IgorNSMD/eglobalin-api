const mongoose = require('mongoose');

const categoriaSchema = new mongoose.Schema({
  nombre: {
    type: String,
    trim: true,
  },
  decripcion: {
    type: String,
    trim: true,
  },
  fechaCreacion: Date
});

module.exports = mongoose.model('categoria', categoriaSchema);