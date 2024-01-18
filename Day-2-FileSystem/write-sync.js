import { writeFileSync } from "node:fs";

const content = "Contenido escrito sincronicamente";
writeFileSync('message.txt', content);
console.log("Contenido guardado exitosamente");
