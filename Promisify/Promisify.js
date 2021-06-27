const fs = require("fs");
const utilities = require("util");

//forma con callback
/* fs.writeFile("./archivos/archivo.txt", "test test test", () => {
  console.log("finalizado");
});
 */

//metodo con promisfy, convertiendo el callback a promesas
const promisfyMetod = utilities.promisify(fs.writeFile);

promisfyMetod("./archivos/archivo.txt", "test test test")
  .then(() => {
    console.log("finalzado con exito");
  })
  .catch((err) => {
    console.log("error");
  });