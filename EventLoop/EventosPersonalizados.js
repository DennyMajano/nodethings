const fs = require("fs");

const writeStream = fs.createWriteStream("./archivo/archivo2.txt", {
  encoding: "utf-8",
});

const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

myEmitter = new MyEmitter();

function writeFile() {
  for (let i = 0; i <= 5; i++) {
    writeStream.write(`Linea de documento numero ${i + 1} \n`);
  }

  writeStream.write("Final del documento");
  writeStream.end();
}

function sendEmail() {
    console.log("Preparando mail");
  setTimeout(() => {
    myEmitter.emit("mailSend");
  }, 1000);
}

function readFile() {
  fs.readFile("./archivo/archivo2.txt", (error, data) => {
    console.log(data.toString());
  });
}

writeStream.on("close", () => {
  sendEmail();
});
myEmitter.on("mailSend", () => {
    readFile();
});

writeFile();
