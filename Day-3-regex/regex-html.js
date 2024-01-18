import { readFileSync } from "node:fs";
const fileName = 'data.html';
const str = readFileSync(fileName).toString();
const pattern = /<(\"[^\"]*\"|'[^']*'|[^'\">])*>/gim;
console.log(`Numero de patrones encontrados en el archivo: ${str.match(pattern).length}`);
