const productos = [
    {
        nombre:"pantalon",
        precio: 100
    }
    ,
    {
        nombre:"remera",
        precio: 50
    }
]
// filter -> .filter()
// ver doc en mdn -> array

//quiero filtrar la ropa que vale -100 (problema que quiero resolver)

// <-- devuelve un nuevo array
const prodectosfiltrados = productos.filter((producto)=> {
  return  Number (producto.precio) < 100
})

console.log(productosfiltrados)