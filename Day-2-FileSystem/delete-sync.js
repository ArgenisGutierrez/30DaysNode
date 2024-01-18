import { unlinkSync } from "node:fs";

const fileName = 'message.txt';
unlinkSync(fileName);
console.log('Archivo borrado exitosamente');
