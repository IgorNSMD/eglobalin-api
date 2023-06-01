const express = require('express')
const router = express.Router()

const categoriaController = require('../controllers/categoriasController')

module.exports = function(){

    router.get('/', (req,res)=> {
        res.send('inicio eglobalin-ism..P1')
    })

    // CategoriaS

    // Agrega nueva Categoria via POST
    router.post('/categorias', 
    categoriaController.nuevaCategoria)

    // Obtener metodo GET
    router.get('/categorias', 
    categoriaController.mostrarCategorias)    

    // Muestra Categoria en especifico
    router.get('/categorias/:idCategoria', 
    categoriaController.mostrarCategoria)    

    // Actualizar Categoria
    router.put('/categorias/:idCategoria', 
    categoriaController.actualizarCategoria)    


    // Eliminar Categoria
    router.delete('/categorias/:idCategoria', 
    categoriaController.eliminarCategoria)        

    
    return router
}