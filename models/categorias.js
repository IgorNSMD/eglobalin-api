const mongoose = require('mongoose');

const categoriaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        trim: true
    }, 
    descripcion: {
        type: String,
        trim: true
    },    
    condicion: {
        type: Boolean
    }

});

module.exports = mongoose.model('categorias', categoriaSchema);