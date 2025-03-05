async function procesarJSON() {

    let resultado = await fetch("../JSON/Muestra.json"); //Cargamos el archivo json desde la ruta en la que esta
    let datos = await resultado.json(); // convertimos la respuesta a un arreglo de objetos de JavaScript
        
    // Recorremos cada usuario del JSON
    for (const usuario of datos) {
        console.log(`\nProcesando usuario: ${usuario.id}, Nombre: ${usuario.nombre}`);

        // Simulamos una operación asincrónica, espera 1s antes de procesar el siguiente usuario
        await new Promise(resolve => setTimeout(resolve, 1000, "¡Usuario Procesado exitosamente!")).then(console.log);
    }

    console.log("\nProcesamiento finalizado.");

}

procesarJSON();
