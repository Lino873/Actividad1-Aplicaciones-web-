const numeros = [1, 2, 3, 4, 5, 6]
//function recorrer() {}

//const recorrer = () => {
//funcion flech bus

//numeros.map(recorrer)
// const nuevoarreglo = numeros.map((numero)=> {
//   console.log(numero)
//   return numero
// })
// trabajar con un objeto
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

const prodctosconinteres = productos.map((producto) =>{
    const productocambiado = {
        nombre: producto.nombre,
        nombre: producto.precio * 1.1

    }
    return productocambiado

})
console.log(prodctosconinteres)

function cb(){
    const n = 1   
    cb(n)
}
x((n)=> {
console.log('se ejecuto el CB con el valor pasado por x'+ n)
})