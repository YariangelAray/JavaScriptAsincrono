// En Java Script, existe el método map para los arreglo, el cual recorre los elementos y nos retorna un nuevo arreglo según la función que se le indique
// const array1 = [1, 4, 9, 16];
// const map1 = array1.map((x) => x * 2);
// console.log(map1);
// Expected output: Array [2, 8, 18, 32]

// Pero escribiremos el código a la antigua
let duplicar = num => num * 2;

let map = (arreglo, callback) => {
  let arreglo2 = [];
  arreglo.forEach(num => {
    arreglo2.push(callback(num));
  });
  return arreglo2;
}

let arreglo = [1, 4, 5, 7, 6, 2, 8, 3];
let arreglo2 = map(arreglo, duplicar);

arreglo2.forEach(num => {console.log(num + " ")});