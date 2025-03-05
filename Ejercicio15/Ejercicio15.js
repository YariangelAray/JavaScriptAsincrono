async function obtenerDatos() {
    let resultado = await fetch("../JSON/Muestra.json"); //Cargamos el archivo json desde la ruta en la que esta
    let datos = await resultado.json(); // convertimos la respuesta a un arreglo de objetos de JavaScript
    console.log(datos); //mostramos los datos por consola
}

console.log("Datos:");
obtenerDatos();