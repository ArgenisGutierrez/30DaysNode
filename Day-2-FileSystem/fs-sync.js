import { readFileSync } from "node:fs";

const content = readFileSync('message.txt');
console.log(`Content : ${content}`);
