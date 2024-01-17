// const http = require('node:http');
import { createServer } from "node:http";

const host = "localhost";
const port = 0;

const server = createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write('Server Working');
  res.end('Server Working Succes');
});

server.listen(port, host, (err) => {
  if (err) {
    return console.log('Error occured: ', err);
  }
  console.log(`Server listen in http://${host}:${server.address().port}`);
})
