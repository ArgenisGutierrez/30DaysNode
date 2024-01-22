import { ReadStream, writeFileSync } from "node:fs";
import { createHmac } from "node:crypto";

const algoritmo = 'md5';
const file_name = 'data.txt';
const millave = 'millavesecreta';
const hmac = createHmac(algoritmo, millave);

const file_data = ReadStream(file_name);

file_data.on('data', (data) => {
  hmac.update(data);
});

file_data.on('end', () => {
  const gen_hmac = hmac.digest('hex');
  console.log(`Hmac generado usando el algoritmo ${algoritmo} \n${gen_hmac} `);
  writeFileSync(file_name, gen_hmac);
});
