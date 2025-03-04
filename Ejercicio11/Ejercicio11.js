//Creamos la promesa
let promesa = new Promise(resolve => 
    setTimeout(()=> resolve("Promesa resuelta."), 3000) //Se resuelve despues de 3 segundos
);

promesa.then(console.log); //Mostramos el resultado de la promesa por consola cuando se resuelva