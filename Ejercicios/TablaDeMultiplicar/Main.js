const { generarTabla, generarTablaConAsync } = require("./Tablas")

console.clear();

generarTablaConAsync(90)
    .then(nombreArchivo =>{
    console.log("Fue creado el archivo ", nombreArchivo, );})
    