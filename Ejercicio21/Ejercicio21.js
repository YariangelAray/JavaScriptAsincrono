async function obtenerDatos() {
  // trycatch para manejar errores
    try {
      let resultado = await fetch("../JSON/Muestra.json"); //Cargamos el archivo json desde la ruta en la que esta
      let datos = await resultado.json(); // convertimos la respuesta a un arreglo de objetos de JavaScript y lo retornamos
      console.log(datos);     
    } catch (error) {
      //Capturamos y mostramos el error si la petición falla
      console.error(error); 
    }
}

console.log("Datos:");
obtenerDatos();