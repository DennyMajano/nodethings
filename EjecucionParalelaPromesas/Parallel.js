function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Usuario");
    }, 1500);
  });
}
function getUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Datos de usuario");
    }, 1500);
  });
}
function getUserPhotos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Fotos de Usuario");
    }, 1500);
  });
}

//todas las promesas deben terminar de ejecutarse para poner continuar

Promise.all([getUser(), getUserData(), getUserPhotos()])
        //Se recibe un array de valores con el mismo orden en que se enviaron las promesas
        .then((values) => {
            console.log(values);
        });
