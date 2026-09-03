import express from 'express'

const PUERTO = 3000

const app = express()


app.get('/', (req, res)=> {
    res.end('MESSI A BOCA')
//res.send({mensaje:  'HOLANDA WITH ENVIAR'})
})




app.listen(PUERTO,()=>{
    console.log(` EXPRESS CORRIENDO EN EL PUERTO ${PUERTO}`)
})
