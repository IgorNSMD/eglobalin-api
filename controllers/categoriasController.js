const Categoria = require('../models/categorias');

// agrega un nuevo Categoria
exports.nuevaCategoria = async (req,res, next) => {
    console.log(req.body)

    const categorias = new Categoria(req.body)

    try {

        // almacenar registro
        await categorias.save();
        res.json({
            mensaje:'Se agrego nueva Categoria'
        })

    } catch (error) {
        // si hay un error
        console.log(error)
        next();
    }

}


//Muestra todos los Categoria
exports.mostrarCategorias = async (req,res, next) => {
    try {

        const categorias = await Categoria.find({})
        res.json(categorias)
        
    } catch (error) {
        // si hay un error
        console.log(error)
        next();      
    }
}

//Muestra un Categoria por su id
exports.mostrarCategoria = async (req,res, next) => {
    const categoria = await Categoria.findById(req.params.idCategoria)

    if (!categoria){
        res.json({mensaje: 'Esa Categoria no existe...'})
        next()
    }

    // Mostrar el Motordato
    res.json(categoria);

}

// Actualiza su Motordato por ID
exports.actualizarCategoria = async (req,res,next) => {

    try {
        const categoria = await Categoria.findOneAndUpdate({ _id:req.params.idCategoria },
            req.body, {
                new: true
            });
        
            

        res.json(categoria)
    } catch (error) {
        // si hay un error
        console.log(error)
        next();        
    }
    
}

// Eliminar Categoria por su ID
exports.eliminarCategoria = async (req,res,next) => {
    try {

        await Categoria.findOneAndDelete({ _id:req.params.idCategoria })
        res.json({
            mensaje:' Categoria Eliminada'
        })
    } catch (error) {
        // si hay un error
        console.log(error)
        next();             
    }
}