async function obtenerDatos() {
    let resultado = await fetch("../JSON/Muestra.json"); //Cargamos el archivo JSON desde la ruta en la que esta
    return await resultado.json(); // convertimos la respuesta a un array de objetos de JavaScript y lo retornamos 
}

console.log("Datos de usuarios que su nombre empiece por B:");

obtenerDatos().then(data => {
    // con el método filter agregamos a un nuevo arreglo los usuarios que comiencen por la letra B y los mostramos por consola
    let result = data.filter( user => user.nombre[0].toUpperCase() === "B")
    console.log(result);
});