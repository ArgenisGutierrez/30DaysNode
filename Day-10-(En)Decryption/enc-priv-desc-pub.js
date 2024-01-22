import { privateEncrypt, publicDecrypt } from "node:crypto";
import { readFile } from "node:fs";

//leyendo la clave privada
const privK = readFile('./priv.key').toString();

const buf = Buffer.from('Texto a encriptar', 'utf-8');

//encriptando el texto
const encData = privateEncrypt(privK, buf);
console.log(encData.toString('utf-8'));

//leyendo la clave publica
const pubK = readFile('./pub.key').toString();

//desencriptando 
const oriData = publicDecrypt(pubK, encData);
console.log(oriData.toString());
