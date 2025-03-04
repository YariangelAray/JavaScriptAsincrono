// En Java Script, existe el método find para los arreglo, el cual recorre los elementos y nos retorna el primer elemento
// que cumpla con la condicion
// const array1 = [5, 12, 8, 130, 44];
// const found = array1.find((element) => element > 10);
// console.log(found);
// Expected output: 12

// Pero escribiremos el código a la antigua


// función enviada como callback
let divisibleTres = num => num % 3 === 0;

//función find
let find = (arreglo, callback) => {
  let encontrado;
    // recorremos el arreglo
  for (let i = 0; i < arreglo.length; i++) {
    // si el resultado de la función callback es true, se retorna el primer elemento que se encuentre;
    if(callback(arreglo[i])) return encontrado = arreglo[i];
  }
  // si no se encuentra ninguna coincidencia, retorna la variable vacia.
  return encontrado;
}

let arreglo = [1, 4, 5, 7,  2, 8];
let resultado = find(arreglo, divisibleTres);

console.log("Arreglo:");
arreglo.forEach(num => {console.log(num + " ")});

// mostramos el resultado por consola
console.log("\n"+resultado);
console.log(resultado ? "El primer número divisible por 3 es: " + resultado : "No se encontraron números divisibles por 3");