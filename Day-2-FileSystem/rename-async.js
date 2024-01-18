import { rename } from "node:fs";

const newName = 'texto.txt';

rename('message.txt', newName, (err) => {
  if (err) {
    throw err;
  };
  console.log("Cambio de nombre exitoso");
});

console.log("Metodo Asincrono");
