//Pedimos las variables desde y hasta
let desde = parseInt(prompt("Ingrese el número desde el que quiera comenzar a imprimir: "));
let hasta = parseInt(prompt("Ingrese el número hasta donde desea imprimir: "));
alert("Números mostrados por consola.");


// ----- setTimeout -----

// Función imprimirNumeros que recibe como parametro las variable desde y hasta
// La cual muestra un número cada segundo, utilizando setTimeout para volver a llamar a la función según el tiempo definido
let imprimirNumeros = (desde, hasta) => {
  console.log(desde++); // Se imprime el número y luego se incrementa el valor
  if (desde <= hasta) //Si el desde es menor o igual que el hasta, se ejecutará el setTimeout llamando nuevamente a la función y enviando los argumentos
    setTimeout(imprimirNumeros, 1000, desde, hasta); 
}

console.log("setTimeout");
imprimirNumeros(desde, hasta); //Llamamos a la función y enviamos los argumentos


// ----- setInterval -----

// Función imprimirNumeros2 que recibe como parametro las variable desde y hasta
// La cual muestra un número cada segundo, utilizando setInterval para volver a llamar a la función según el tiempo definido
// Y cuando la variable desde es mayor que hasta, se cancela la ejecución del setInterval.
let imprimirNumeros2 = (desde, hasta) => {
  let id = setInterval(() => { //Asignamos su identificador a una variable id
    console.log(desde++); // Se imprime el número y luego se incrementa el valor
  }, 1000);

  //setTimeout que nos permite cancelar la ejecucion del setInterval, se ejecutará despues que pasen los segundos y evaluará si el desde es mayor que el hasta
  // hasta*1000 nos permite calcular la cantidad de segundos que deben transcurrir para poder evaluar la condición
  setTimeout(() => { if (desde > hasta) clearInterval(id); }, (hasta*1000));
}

// setTimeout que nos ayuda a ejecutar la segunda función despues de que se ejecute la primera 
setTimeout(() => {
  console.log("setInterval");
  imprimirNumeros2(desde, hasta);
}, (hasta*1000));