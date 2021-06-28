const http = require("http");

const req = http.get(
  "http://jsonplaceholder.typicode.com/photos",
  (res) => { // 
    res.on("data",(data)=>{ // Se ejecuta cuando se recibe un paquete de datos
        console.log("bloque de datos recibidos");
    });
    res.on("end",(data)=>{
        console.log("termina http");
    });
  
    
  }
);

req.on("socket", (data) => {
  console.log("Inicia conexión");
});

req.on("error", () => {
  console.log("Error");
});
