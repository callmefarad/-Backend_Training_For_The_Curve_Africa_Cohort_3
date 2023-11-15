// call the module
const http = require("http");

// create a host
const host = "localhost";
// create a port
const port = 2000;

// create a server instance
const server = http.createServer((req, res) => {
  // show a text content
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World");
});

// connect your server to the port
server.listen(port, host, () => {
  console.log(`Server is listening on host: ${host}:${port}`);
});
