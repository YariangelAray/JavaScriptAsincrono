//Creación de las promesas
let promesa1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Hola"), 1000) // Se resuelve despues de cierto tiempo
});
let promesa2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promesa resuelta"), 3000)
});
let promesa3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(14), 2000)
});

//Mostramos el resultado  de las promesas
Promise.all([promesa1, promesa2, promesa3]).then(result => {
  console.log(`Todas las promesas fueron resueltas.\nResultado: ${result}`);
}).catch(error => {
  console.error(error);
})