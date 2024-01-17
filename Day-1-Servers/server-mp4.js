import { createServer } from "node:http";
import { createReadStream } from "node:fs";

const port = 0;
const host = "localhost";

const server = createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "video/mp4" });
  let rstrem = createReadStream('video.mp4');
  rstrem.pipe(res);
});

server.listen(port, host, (err) => {
  if (err) {
    return console.log('Error occured: ', err);
  }
  console.log(`Server listen in http://${host}:${server.address().port}`);
});
