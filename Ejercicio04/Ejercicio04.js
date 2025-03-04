// En Java Script, existe el método filter para los arreglo, el cual recorre los elementos y nos retorna un nuevo arreglo
// en donde estan los elementos que pasaron el filtro
// const words = ["spray", "elite", "exuberant", "destruction", "present"];
// const result = words.filter((word) => word.length > 6);
// console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"] Palabra con mas de 6 caracteres

// Pero escribiremos el código a la antigua

// función pasada como callback
let esPar = num => num%2 == 0;

//función filter
let filter = (arreglo, callback) => {
  let arreglo2 = [];
  // recorremos el arreglo
  arreglo.forEach(num => {
    // agregamos el resultado al nuevo arreglo si la función callback retorna true
    if (callback(num)) arreglo2.push(num);
  });
  return arreglo2;
}

let arreglo = [1, 4, 5, 7, 6, 2, 8, 3];
let arreglo2 = filter(arreglo, esPar);

console.log("Arreglo:");
arreglo.forEach(num => {console.log(num + " ")});

// mostramos el arreglo por consola.
console.log("Arreglo con números que pasaron el filtro: ");
arreglo2.forEach(num => {console.log(num + " ")});