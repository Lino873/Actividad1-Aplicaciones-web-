function obtenerProductos(datos) {
    datos.map((dato)=>{
        return {
    "id": datos.id,
    "franquicia": dato.franquicia,
    "valor": dato.valor,
    "color": dato.color
  }
    })
}