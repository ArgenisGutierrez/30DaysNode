import { createCipheriv, createDecipheriv, randomBytes } from "node:crypto";
const algoritm = 'aes-256-ctr';
const password = 'RJ23edrf';
const iv = randomBytes(16);

function encrypt(text) {
  const cipher = createCipheriv(algoritm, password, iv);
  const crypted = cipher.update(text, 'utf-8', 'hex');
  crypted += cipher.final('hex');
  return crypted;
};

function decrypt(text) {
  const decipher = createDecipheriv(algoritm, password);
  const dec = decipher.update(text, 'hex', 'utf-8');
  dec += decipher.final('utf-8');
  return dec;
};

const text = 'Mensaje que sera encriptado';
const e = encrypt(text);
console.log(e);

const d = decrypt(e);
console.log(d);
