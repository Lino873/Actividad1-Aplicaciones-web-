import http from 'node:http'


console.log('inicio')

// instanciamos un servidor
const servidor = http.createServer((peticion, respuesta)=>{
    //console.log('entra peticion')

 
//console.log(peticion.url, peticion.method)
//respuesta.end('hola desde el servidor')

if (peticion.url === '/' && peticion.method === 'GET'){
return respuesta.end('estoy en la raiz')

}
 if(peticion.url === '/saludo' && peticion.method === 'GET'){
    return respuesta.end('hola que tal')
} 
 if(peticion.url === '/saludo' && peticion.method === 'POST'){
    return respuesta.end('hola que tal en POST')
} 

    respuesta.statusCode = 404
    respuesta.end('no encontrado')


})
// abrimos un puerto y lo ponemos a escuchar
servidor.listen(3000, ()=>{
    console.log('servidor arrancando')
})