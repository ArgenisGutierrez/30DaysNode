import { createHash } from "node:crypto";
// se crea el objeto hash
const hash = createHash('whirlpool');
// encriptando el dato que queremos
const data = hash.update('nodeArgenis', 'utf-8');
// pasando el hash a formato requerido
const gen_hash = data.digest('hex');
//mostrando el dato encriptado
console.log(`Hash: ${gen_hash}`);
