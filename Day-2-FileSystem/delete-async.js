import { unlink } from "node:fs";

const fileName = 'message.txt';

unlink(fileName, (err) => {
  if (err) {
    throw err;
  };
  console.log('Archivo borrado exitosamente');
});
