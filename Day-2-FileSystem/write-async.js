import { writeFile } from "node:fs";

const content = "contenido escrito en el archivo";

writeFile('message.txt', content, (err) => {
  if (err) {
    throw err;
  };
  console.log("Contenido guradado exitosamente");
});
