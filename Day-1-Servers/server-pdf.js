import { createServer } from "node:http";
import { readFile } from "node:fs";
console.log('Server will listen at :  127.0.0.1:3000 ');
createServer((req, res) => {
  console.log("Port Number : 3000");
  res.writeHead(200, { "Content-Type": "application/pdf" });

  readFile('index.pdf', (error, data) => {
    if (error) {
      res.json({ 'status': 'error', msg: err });
    } else {
      res.write(data);
      res.end();
    }
  });
}).listen(3000);
