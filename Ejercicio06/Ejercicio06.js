// En Java Script, existe el método some para los arreglo, el cual recorre los elementos y nos retorna true
// si al menos un elemento cumplen con la condicion
// const array = [1, 2, 3, 4, 5];

// const even = (element) => element % 2 === 0;
// console.log(array.some(even));
// Expected output: true

// Pero escribiremos el código a la antigua


// función enviada como callback
let esPrimo = num => {
    if (num === 0 || num === 1) return false;

    for (let i = 2; i < num; i++) {

        if ((num % i)===0) {
            return false;
        }        
    }
    return true;

}
//función some
let some = (arreglo, callback) => {
  
    // recorremos el arreglo
  for (let i = 0; i < arreglo.length; i++) {
    // si el resultado de la función callback es true para al menos un solo elemento, retornamos la función.
    if(callback(arreglo[i])) return true;
  }
  // si nunca se ejecuta el if, significa que ningun elemento cumplio la condición
  return false;
}

let arreglo = [1, 4, 5, 7, 6, 2, 8, 3];
let resultado = some(arreglo, esPrimo);

console.log("Arreglo:");
arreglo.forEach(num => {console.log(num + " ")});

// mostramos el resultado por consola
console.log(resultado);
console.log(resultado ? "Un elemento es primo." : "Ningun elemento es primo");