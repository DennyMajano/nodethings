const fs = require("fs");

const generarTabla = (base) => {
  return new Promise((resolve, reject) => {
    let datos = "";
    for (let i = 1; i <= 12; i++) {
        datos += `${i} x ${base} = ${i*base}\n`;
    }

    fs.writeFile(`tabla_del_${base}.txt`,datos,(error)=>{
        if(error) return reject(error);
        resolve(`tabla_del_${base}.txt`)
    })
  });
};

const generarTablaConAsync = async(base) =>{
    try {
        let nombreArchivo = `tabla_del_${base}.txt`;
        let datos = "";
        for (let i = 1; i <= 12; i++) {
            datos += `${i} x ${base} = ${i*base}\n`;
        }
        fs.writeFile(nombreArchivo,datos,(error)=>{
            if(error) throw error;
        })
        return nombreArchivo;
    } catch (error) {
        return error;
    }
}

module.exports = {
  generarTabla,
  generarTablaConAsync
};
