import { privateDecrypt, publicEncrypt } from "node:crypto";
import { readFile } from "node:fs";

//leyendo la clave privada
const pubK = readFile('./pub.key').toString();

const buf = Buffer.from('Texto a encriptar', 'utf-8');

//encriptando el texto
const encData = publicEncrypt(pubK, buf);
console.log(encData.toString('utf-8'));

//leyendo la clave publica
privK = readFile('./priv.key').toString();

//desencriptando 
oriData = privateDecrypt(privk, encData);
console.log(origin.toString());
