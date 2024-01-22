import { ReadStream, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";

const algoritmo = 'sha256';
const file = 'data.txt';

const hash = createHash(algoritmo);
const file_data = ReadStream(file);

file_data.on('data', (data) => {
  hash.update(data);
})

file_data.on('end', () => {
  const gen_shash = hash.digest('hex');
  console.log(`Hash generado con el algoritmo ${algoritmo} hash generado${gen_shash} con el archivo ${file}`);
  writeFileSync(file, gen_shash);
});
