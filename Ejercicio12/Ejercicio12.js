//Declaramos la función asincrónica
const f = async () => {
    //Creamos la promesa 
    let resultado = await new Promise (resolve => setTimeout(() => resolve("Operacion completada"), 1000));
    //Mostramos el resultado
    alert(resultado); 
}

f(); //Llamamos a la función