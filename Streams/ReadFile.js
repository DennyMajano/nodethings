const fs = require("fs");

console.time("Tiempo de respuesta");

//Lectura sincronica
//Tiempo de respuesta: 782.025ms con 5 lecturas
//Tiempo de respuesta: 1.455s con 10 lecturas
/* for (i=0; i<=10; i++){
    fs.readFileSync("archivo.txt","utf-8");
} */

//Lectura con streams
//Tiempo de respuesta: 2.462ms con 10 lecturas
//Tiempo de respuesta: 10.498ms con 100 lecturas
for (i = 0; i <= 100; i++) {
  const streamFile = fs.createReadStream("archivo.txt", { encoding: "utf-8" });
}

console.timeEnd("Tiempo de respuesta");
