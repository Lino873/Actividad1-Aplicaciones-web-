import * as modelo from './productos.modelo.mjs'
export  function obtenerProductos(req, res){
    const productos = modelo.obtenerProductos()
    //aca incorporariamos el modelo de la vista
    res.json(productos)
}

export  function obtenerProducto(req, res){
    const id = Number(req.params.id)
    const producto = modelo.obtenerProducto(id)
    //aca incorporariamos el modelo de la vista
    res.json(producto)
}