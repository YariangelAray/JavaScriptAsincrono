// creamos la promesa que se rechaza despues de 2 segundos
let promesa = new Promise((resolve, reject) => {
   setTimeout(() => reject(new Error("Promise rechazada")), 2000); 
});

//capturamos el error y lo mostramos por consola
promesa.catch(console.error);