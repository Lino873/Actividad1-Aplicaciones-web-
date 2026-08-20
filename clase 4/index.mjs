
import fsp from 'node:fs/promises'
import path from 'node:path'

const ruta = path.join( './usuario.json')
let usuario =''
try{

     usuario = await fsp.readFile(ruta,'utf-8')
}
catch(error){
console.log(error.message)}

const Objetousuario = JSON.parse(usuario)
console.log(Objetousuario.nombre)
// escribir archivo

try{
    const ruta = path.join('./saludo.txt')
  await fsp.writeFile(ruta, '\nescribiendo archivo 1',{
    encoding:'utf-8',
    flag: 'a'

})
}
catch(error){
console.log(error.message)
}