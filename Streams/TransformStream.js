const fs = require("fs");
const {Transform} = require("stream");

const readStream = fs.createReadStream("./archivos/First.txt",{encoding:"utf-8"});
const writeStream = fs.createWriteStream("./archivos/Second.txt",{encoding:"utf-8"});

const filter = new Transform({
    readableObjectMode:true,
    transform(data,encode,callback){
        this.push(data.toString().toUpperCase());
        console.log(data);
        callback();
    },
    final(callback){
        callback();
    }
});

readStream.pipe(filter).pipe(writeStream);

readStream.on("close",()=>{
    console.log("proceso finalizado");
});