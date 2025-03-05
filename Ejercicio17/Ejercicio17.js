async function obtenerDatos() {
    let resultado = await fetch("../Ejercicio15/Muestra.json"); //Cargamos el archivo JSON desde la ruta en la que esta
    let datos =  await resultado.json(); // convertimos la respuesta a un array de objetos de JavaScript
    
    // filtramos los usuarios cuya edad este en el rango de 18 a 19. Luego usamos el método map para extraer solo el nombre y la edad de los usuarios
    let infoUsers = datos.filter( user => user.edad >= 18 && user.edad <= 19)
                        .map(user => ({
                                        nombre: user.nombre,
                                        edad: user.edad
                                    }));
    console.log(infoUsers); //Mostramos el resultado por consola.
}

obtenerDatos();
