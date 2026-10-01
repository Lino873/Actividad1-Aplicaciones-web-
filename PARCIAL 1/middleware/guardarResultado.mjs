
import fsp from 'node:fs/promises'
// Creo un middleware personalizado para guardar el resultado del procedimiento.
const guardarResultado = async (req, res, next) => {
    // Obtengo el resultado que fue guardado anteriormente en res.locals.
    const resultado = res.locals.resultado
   // Utilizo JSON.stringify para convertir el resultado en texto JSON
    const contenido = JSON.stringify(resultado)
    // Utilizo writeFile para guardar el resultado en el archivo JSON.
    await fsp.writeFile('./datos/resultado-disponibles.json', contenido)
    // Utilizo next() para continuar con el siguiente paso de la petición.
    next()
}
export default guardarResultado