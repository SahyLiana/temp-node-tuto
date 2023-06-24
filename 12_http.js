const http = require("http");

const server = http.createServer((req, res) => {
  // console.log(req);
  if (req.url === "/") {
    res.end("Welcome to our home page");
  } else if (req.url === "/about") {
    res.end("Here is our short history");
  } else {
    res.end(`
    <h1>Opps!</h1>
    <p>We cannot seem to find the page you are looking for<p>
    <a href='/'>Back home</a>
  `);
  }
});
// res.write("Welcome to our home page");
// res.end();

server.listen(5000);
