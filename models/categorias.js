const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categoriasSchema = new Schema({
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

module.exports = mongoose.model('categorias', categoriasSchema);