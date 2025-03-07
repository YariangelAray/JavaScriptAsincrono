const target = { //Se crea el objeto original con sus atributos
  nombre: "Yari",
  edad: "18"
};

const handler = { // Se crea el objeto manipulador que interceptará y redefinirá las operaciones del objeto original
  get: function (target, prop, receiver) {
    return "privado"; // Al tratar de acceder a una propiedad del objeto, se interceptará retornando la palabra "privado"
  }
};

//Se crea el objeto proxy usuario
const usuario = new Proxy(target, handler);

console.log("Objeto Proxy creado");

//Tratamos de acceder a sus propiedades.
console.log(usuario.nombre);
console.log(usuario.edad);