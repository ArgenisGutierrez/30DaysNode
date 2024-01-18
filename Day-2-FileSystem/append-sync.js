import { appendFileSync } from "node:fs";

const content = "Contenido agregado de forma sincrona";

appendFileSync('message.txt', content);
console.log("Contenido agregado exitosamente");
