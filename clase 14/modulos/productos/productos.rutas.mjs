import { Router} from 'express'
import * as controlador from "./producto.controlador.mjs"
const rutasModeloProductos = new Router();

rutasModeloProductos.get('/api/v1/productos', controlador.obtenerProductos);

export default rutasModeloProductos