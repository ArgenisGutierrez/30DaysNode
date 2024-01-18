import { readFileSync } from "node:fs";
const fileName = 'data.txt';
const str = readFileSync(fileName).toString();
console.log(`Numero de patrones encontrados en el archivo : ${str.match(/man/gim).length}`);
