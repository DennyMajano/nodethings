const fs = require("fs");
const {Duplex} = require("stream");

const readStream = fs.createReadStream("./archivos/First.txt",{encoding:"utf-8"});
const writeStream = fs.createWriteStream("./archivos/Second.txt",{encoding:"utf-8"});

const report = new Duplex({
    write(data,encode,callback){
        console.log(data);
        callback();
    },
    read(size){}
});

readStream.pipe(report).pipe(writeStream);

readStream.on("close",()=>{
    console.log("proceso finalizado");
});