// En Java Script, existe el método map para los arreglo, el cual recorre los elementos y nos retorna un nuevo arreglo según la función que se le indique
// const array1 = [1, 4, 9, 16];
// const map1 = array1.map((x) => x * 2);
// console.log(map1);
// Expected output: Array [2, 8, 18, 32]

// Pero escribiremos el código a la antigua

// función pasada como callback
let duplicar = num => num * 2;

//función map
let map = (arreglo, callback) => {
  let arreglo2 = [];
  // recorremos el arreglo y agregamos el resultado del elemento al nuevo arreglo
  arreglo.forEach(num => {
    arreglo2.push(callback(num));
  });
  return arreglo2;
}

let arreglo = [1, 4, 5, 7, 6, 2, 8, 3];
let arreglo2 = map(arreglo, duplicar);
// mostramos el arreglo por consola.
console.log("Arreglo duplicado: ");
arreglo2.forEach(num => {console.log(num + " ")});