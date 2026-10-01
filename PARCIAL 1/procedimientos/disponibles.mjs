import fsp from 'node:fs/promises'
async function obtenerdisponibles() {
    // Utilizo readFile para leer el archivo JSON en cada ejecución del procedimiento.
    const contenido = await fsp.readFile('./datos/perifericos.json', 'utf8')
    // Utilizo JSON.parse para convertir el contenido del archivo en un arreglo de objetos.
    const perifericos = JSON.parse(contenido)
    // Utilizo filter() porque necesito obtener solamente los periféricos
    const disponibles = perifericos.filter(p => p.stock > 0)
    
    
    return disponibles    
}
export default obtenerdisponibles
   