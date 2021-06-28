const fs = require("fs");
const http = require("http");

function readFile() {
  //fs.readFileSync("./archivo/archivo.txt","utf-8");

  //Con el stream el event loop no se bloquea tanto y es mas eficiente 
  const streamReader = fs.createReadStream("./archivo/archivo.txt", {
    encoding: "utf-8",
  });
}

http
  .createServer((req, res) => {
    for (let i = 0; i <= 100000; i++) {
      readFile();
    }
    res.write("Hello World");
    res.end();
  })
  .listen(8080);
