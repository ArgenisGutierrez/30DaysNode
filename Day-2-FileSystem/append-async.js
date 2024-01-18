import { appendFile } from "node:fs";

const content = "Contenido agregado al archivo";

appendFile('message.txt', content, (err) => {
  if (err) {
    throw err;
  };
  console.log("El contenido fue agregado exitosamente");
});
