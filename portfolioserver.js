const http = require("http");
const path = require("path");
const fs = require("fs");

const portfolioServer = http.createServer((req, res) => {
  let filePath = path.join(
    __dirname,
    "portfolio",
    req.url == "/" ? "index.html" : req.url
  );

  let fileExtension = path.extname(filePath);

  let contentType = "text/html";
  switch (fileExtension) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/png";
      break;
  }
  fs.readFile(filePath, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      res.writeHead(200, { "content-type": contentType });
      res.end(content, "utf8");
    }
  });
});

const PORT = process.env.PORT || 5000;

portfolioServer.listen(runningPort, () =>
  console.log(`server running on port ${PORT}`)
);
