import { renameSync } from "node:fs";

renameSync('message.txt', 'texto.txt');
console.log('Cambio de nombre exitoso');
