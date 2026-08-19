// usado de modulos
//uso import (ESModule)
import os from 'node:os';
import fsp from 'node:fs/promises';

const contenido = await fsp.readFile('./texto.txt', 'utf-8')
console.log(contenido)
//console.log(os.totalmem() - os.freemem())
                               