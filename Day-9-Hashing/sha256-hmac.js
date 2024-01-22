import { createHmac } from "node:crypto";
// se crea el objeto hash
const hash = createHmac('sha256', 'millavesecreta');
// encriptando el dato que queremos
const data = hash.update('nodeArgenis', 'utf-8');
// pasando el hmac a formato requerido hexadecimal
const gen_hash = data.digest('hex');
//mostrando el dato encriptado
console.log(`Hmac: ${gen_hash}`);
