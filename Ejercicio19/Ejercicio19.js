//Creación de las promesas
let promesa1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Hola"), 1000) // Se resuelve despues de cierto tiempo
});
let promesa2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promesa resuelta"), 2000)
});
let promesa3 = new Promise((resolve, reject) => {
  setTimeout(() => reject("Promesa rechazada"), 1000) //Esta promesa es rechazada
});

//Mostramos el estado  de las promesas
Promise.allSettled([promesa1, promesa2, promesa3]).then(console.log)