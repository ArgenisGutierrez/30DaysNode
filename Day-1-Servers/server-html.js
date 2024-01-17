import { createServer } from "node:http";
import { readFile } from "node:fs";

const host = "localhost";
const port = 0;

const server = createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  readFile('index.html', (err, dara) => {
    if (err) {
      throw err;
    }
    console.log('Operation Success');
    res.end(dara);
  });
}).listen(port, host, (err) => {
  if (err) {
    return console.log('Error occured: ', err);
  }
  console.log(`Server listen in http://${host}:${server.address().port}`);
});
