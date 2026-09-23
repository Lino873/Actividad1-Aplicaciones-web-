// exportar de manera nombrada
export function chequearClave  (req, res, next){
    const clave = req.body.clave
     if (clave === CLAVE){
        next()
     }
         res.status(403).json({mensaje: 'clave incorrecta'}) 
 
}

//no nombrada
export default chequearClave

 