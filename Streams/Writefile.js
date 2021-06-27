const fs = require("fs");

let content = "texto de prueba \n";
let iterations = 20;
const WriteStream = fs.createWriteStream("3/archivos/ejemplo2.txt",{encoding:"utf-8"});
for (let i = 0; i<= iterations; i++){
    content+=content;

    WriteStream.write(content,res=>{
        console.log("Insertando datos");
    });
}

fs.writeFile("3/archivos/ejemplo1.txt",content,()=>{
    console.log("Se ha escrito el archivo");
});

/* const WriteStream = fs.createWriteStream("3/archivos/ejemplo2.txt",{encoding:"utf-8"});

WriteStream.write(content,res=>{
    console.log("Se ha escrito el archivo con stream");
});
 */