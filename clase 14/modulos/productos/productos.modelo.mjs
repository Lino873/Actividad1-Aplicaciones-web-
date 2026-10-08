import productos from "../../datos/productos.mjs"

//GET Todo
export function obtenerProductos(){
    return productos
}
export function obtenerProducto(id){
   //filtramos ID
const producto = productos.filter(producto => producto.id === id )
    return producto
}
