import express from 'express'
import rutasModeloProducto from './modulos/productos/productos.rutas.mjs'
const PUERTO = 3000

const app = express()
app.use(rutasModeloProducto)

app.listen(PUERTO)