// En Java Script, existe el método every para los arreglo, el cual recorre los elementos y nos retorna true
// o false si todos los elementos cumplen con la condicion
// const isBelowThreshold = (currentValue) => currentValue < 40;
// const array1 = [1, 30, 39, 29, 10, 13];
// console.log(array1.every(isBelowThreshold));

// Pero escribiremos el código a la antigua

// función enviada como callback
let esImpar = num => num%2 != 0;

//función every
let every = (arreglo, callback) => {
  
    // recorremos el arreglo
  for (let i = 0; i < arreglo.length; i++) {
    // si el resultado de la función callback es falsa en alguno de los elementos, inmediatamente retornamos la función every
    if(!callback(arreglo[i])) return false;
  }

  // si nunca se ejecuta el if, significa que todos los elementos cumplen con la condición
  return true;
}

let arreglo = [1, 4, 5, 7, 6, 2, 8, 3];
let resultado = every(arreglo, esImpar);

console.log("Arreglo:");
arreglo.forEach(num => {console.log(num + " ")});

// mostramos el resultado por consola
console.log(resultado);
console.log(resultado ? "Todos los números del arreglo son impares." : "No todos los números del arreglo son impares.");