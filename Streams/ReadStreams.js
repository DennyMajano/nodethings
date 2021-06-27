const fs = require("fs");

const streamFile = fs.createReadStream("archivo.txt", { encoding: "utf-8" });

//Se pueden encadenar
streamFile
  .on("open", () => {
    console.log("El archivo ha sido abierto");
  })
  .on("data", () => {
    console.log("Se ha recibido datos");
  })
  .on("close", () => {
    console.log("Se ha cerrado el archivo");
  })
  .on("error", () => {
    console.log("error en el archivo");
  });

  // O de forma individual
/* streamFile.on("open",()=>{
  console.log("El archivo ha sido abierto");
})
streamFile.on("data",()=>{
    console.log("Se ha recibido datos");
});
streamFile.on("close",()=>{
    console.log("Se ha cerrado el archivo");
});
streamFile.on("error",()=>{
    console.log("error en el archivo");
}); */
