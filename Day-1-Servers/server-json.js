import { createServer } from "node:http";
import { readFile } from "node:fs";

const host = "localhost";
const port = 0;

const server = createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  let json_response = {
    status: 200,
    message: 'succssful',
    result: ['sunday', 'monday', 'tuesday', 'wednesday'],
    code: 2000
  };
  res.end(JSON.stringify(json_response));
}).listen(port, host, (err) => {
  if (err) {
    return console.log('Error occured: ', err);
  }
  console.log(`Server listen in http://${host}:${server.address().port}`);
});
