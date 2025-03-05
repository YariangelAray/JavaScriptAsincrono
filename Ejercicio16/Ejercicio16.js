async function obtenerDatos() {
    let resultado = await fetch("../Ejercicio15/Muestra.json"); //Cargamos el archivo JSON desde la ruta en la que esta
    return await resultado.json(); // convertimos la respuesta a un array de objetos de JavaScript y lo retornamos 
}

obtenerDatos().then(data => {
    // con el método filter agregamos a un nuevo arreglo los usuarios que comiencen por la letra B y los mostramos por consola
    let result = data.filter( user => user.nombre.charAt(0).toUpperCase() === "B")
    console.log(result);
});