import { createWriteStream } from "node:fs";
import { Console } from "node:console";
const output = createWriteStream('./stdout.log');
const errOutput = createWriteStream('./stderr.log');

const print = new Console(output, errOutput);

const roll = 839147;
print.log('roll: %d', roll);
print.log('Esto se almacena en el archivo');
