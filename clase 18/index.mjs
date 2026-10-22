import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import multer from 'multer'
import pool from './conexion.bd.mjs'
import { error } from 'console'

dotenv.config()

// console.log(process.env.PUERTO)

const PUERTO = process.env.PUERTO || 3000
// basico
const subirArchivos = multer({
    dest: path.resolve('archivos')
}).single('archivo')
//const gestionarArchivos = subirArchivos.single('archivo')

const app = express()
app.post('/subir', (req, res) => {
    subirArchivos(req, res, async (error) => {
        if (error) {
            // error no pasanada
            return res.status(500).json({ mensaje: 'No se pudo subir el archivo' })
        }
        try {
            //console.log(req.file)
           const resultado = await pool.query('INSERT INTO productos(producto, precio, imagen) VALUES($1, $2, $3)',
                [req.body.producto,
                req.body.precio,
                req.filename])
        } catch (error) {
            //Borrar imagen si hubo problema en la BD

        }
        res.json({ mensaje: 'Datos cargados' })

    })

})
app.use(express.static(path.resolve('publica')))
app.use('/archivos', express.static(path.resolve('archivos')))

app.listen(PUERTO)