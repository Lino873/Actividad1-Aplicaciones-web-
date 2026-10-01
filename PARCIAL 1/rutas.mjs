import { Router } from 'express'
import fsp from 'node:fs/promises'
import obtenerDisponibles from './procedimientos/disponibles.mjs'
import guardarResultado from './middleware/guardarResultado.mjs'


const rutasApiV1 = new Router()


rutasApiV1.get('/api/v1/perifericos', async (req, res) => {
    // Utilizo readFile para leer el archivo JSON en cada petición
    const contenido = await fsp.readFile('./datos/perifericos.json', 'utf8')
    // Utilizo JSON.parse para convertir el contenido del archivo en un arreglo de objetos
    const perifericos = JSON.parse(contenido)

    res.status(200).json(perifericos)
})
     // Endpoint REST que recibe el id del periférico como parámetro de ruta
rutasApiV1.get('/api/v1/perifericos/:id', async (req, res) => {
    // Obtengo el id enviado como parámetro en la ruta
    const id = req.params.id
    // Leo nuevamente el archivo JSON en cada petición.
    const contenido = await fsp.readFile('./datos/perifericos.json', 'utf8')
    //Convierto el contenido del archivo en un arreglo de objetos
    const perifericos = JSON.parse(contenido)
    // Utilizo find() porque necesito buscar dentro del arreglo el periférico que tenga el mismo id que recibí en la ruta
    const periferico = perifericos.find(p => p.id == id)

    res.status(200).json(periferico)
})

rutasApiV1.get(
    '/procedimientos/perifericos-disponibles',
    async (req, res, next) => {
        // Ejecuto el procedimiento que obtiene los periféricos disponibles
        const resultado = await obtenerDisponibles()
        // Utilizo res.locals para guardar el resultado y poder utilizarlo
        res.locals.resultado = resultado
        // Utilizo res.locals para guardar el resultado y poder utilizarlo
        next()
    },
    guardarResultado,
    (req, res) => {
        // Devuelvo como respuesta el resultado obtenido por el procedimiento.
        res.status(200).json(res.locals.resultado)
    }
)



export default rutasApiV1