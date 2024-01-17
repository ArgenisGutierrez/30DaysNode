import { createServer } from "node:http";
import { exists, createReadStream } from "node:fs";

const port = 0;
const host = "localhost";

const server = createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "audio/mp3" });
  let rstrem = createReadStream('audio.mp3');
  rstrem.pipe(res);
});

server.listen(port, host, (err) => {
  if (err) {
    return console.log('Error occured: ', err);
  }
  console.log(`Server listen in http://${host}:${server.address().port}`);
});
