const fs = require("fs");
const archivo = fs.createWriteStream("archivo.txt");

for (let i = 0; i <= 2e6; i++) {
  archivo.write("Esto es una prueba hecha por Denny Majano para archivos");
}

archivo.end();
