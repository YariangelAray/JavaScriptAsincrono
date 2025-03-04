// En Java Script, existe el método findIndex para los arreglo, el cual recorre los elementos y nos retorna el indice del primer elemento
// que cumpla con la condicion
// const array1 = [5, 12, 8, 130, 44];
// const isLargeNumber = (element) => element > 13;
// console.log(array1.findIndex(isLargeNumber));
// Expected output: 3

// Pero escribiremos el código a la antigua


// función enviada como callback
let divisibleTres = num => num % 3 === 0;

//función findIndex
let findIndex = (arreglo, callback) => {
  let indice;
    // recorremos el arreglo
  for (let i = 0; i < arreglo.length; i++) {
    // si el resultado de la función callback es true, se retorna el indice del primer elemento que se encuentre
    if(callback(arreglo[i])) return indice = i;
  }
  // si no se encuentra ninguna coincidencia, retorna la variable vacia.
  return indice;
}

let arreglo = [1, 4, 5, 7, 6, 2, 8];
let resultado = findIndex(arreglo, divisibleTres);

console.log("Arreglo:");
arreglo.forEach(num => {console.log(num + " ")});

// mostramos el resultado por consola
console.log("\n"+resultado);
console.log(resultado ? "El indice del primer número divisible por 3 es: " + resultado : "No se encontraron números divisibles por 3");