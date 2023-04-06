const https = require("http");
const fs = require("fs");

const port = process.env.PORT || 3000;

const server = https.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  console.log(req.url);

  if (req.url == "/") {
    res.statusCode = 200;
    res.end("<h1>Home Page</h1>");
  } else if (req.url == "/dex") {
    res.statusCode = 200;
    const data = fs.readFileSync("index.html");
    res.end(data.toString());
  } else {
    res.statusCode = 404;
    res.end("<h1>404 Not Found</h1>");
  }
});

server.listen(port, () => {
  console.log(`Server is on port ${port}`);
});
