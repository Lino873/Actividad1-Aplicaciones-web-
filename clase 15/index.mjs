import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import multer from 'multer'
import pool from './conexion.bd.mjs'

dotenv.config()

// console.log(process.env.PUERTO)

const PUERTO = process.env.PUERTO || 3000

const app = express()
app.get('/api/v1/productos', async(req,res,)=>{
const resultado = await pg.query('SELECT * FROM productos');
console.log(resultado.rows);
res.json(resultado.rows)
})


app.listen(PUERTO)