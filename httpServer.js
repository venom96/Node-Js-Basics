const https = require("http");

const port = process.env.PORT || 3000;

const server = https.createServer((req, res) => {
  console.log(req.url);

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>This is Res End</h1>");
});

server.listen(port, () => {
  console.log(`Server is on port ${port}`);
});
