import express from 'express'
import * as  middlesware from './middleswares.mjs'

const Puerto = 3000

const CLAVE = '12345'

const logs = [{compu: 91, estado: "activo", }]

const app = express()

app.use(express.json());
// la ruta es estado, express siempre entra en la primera
app.listen(Puerto, () => {
    console.log(`Servidor corriendo http://localhost:${Puerto}`)
})

app.get('/estado',(req, res) => {
   res.json(logs)
})

//crear arreglo donde guardaremos como un log de estados

app.post('/estado', middlesware.chequearClave, (req, res) => {
    const clave = req.body.clave 
    if (clave === CLAVE){
           logs.push(req.body)
        return res.status(201).json({
            mensaje: "clave se guardo la clave", logs: req.body
            
        })
        
    }
    //defecto
    
})
//quiero desacoplar los middlesware en un modulo externo
//FUNCIONES / MIDDLESWARES


