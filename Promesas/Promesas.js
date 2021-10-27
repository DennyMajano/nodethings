const libros = [
  {
    id: 1,
    titulo: "Libro 1",
  },
  {
    id: 2,
    titulo: "Libro 2",
  },
  {
    id: 3,
    titulo: "Libro 3",
  },
  {
    id: 4,
    titulo: "Libro 4",
  },
];
const librosStock = [
  {
    id: 1,
    cantidad: 2,
  },
  {
    id: 2,
    cantidad: 3,
  },
  {
    id: 3,
    cantidad: 4,
  },
];

const getLibro = (id) => {
  return new Promise((resolve, reject) => {
    const libro = libros.find((e) => e.id === id)?.titulo;
    libro ? resolve(libro) : reject(`No existe libro con id ${id}`);
  });
};

const getStockDeLibro = (id) => {
  return new Promise((resolve, reject) => {
    const stockLibro = librosStock.find((stock) => stock.id === id)?.cantidad;
    stockLibro ? resolve(stockLibro) : reject(stockLibro);
  });
};


let nombreLibro;
getLibro(1)
  .then(libro =>{
      nombreLibro = libro;
      return getStockDeLibro(1);
  })
  .then(stock => console.log(`El libro ${nombreLibro} tiene en stock ${stock} unidades` ))
  .catch(error => console.log(error));

