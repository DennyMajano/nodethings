const fs = require("fs");

const readStream = fs.createReadStream("4/archivos/First.txt",{encoding:"utf-8"});
const writeStream = fs.createWriteStream("4/archivos/Second.txt",{encoding:"utf-8"});

readStream.pipe(writeStream);

readStream.on("close",()=>{
    console.log("proceso finalizado");
});