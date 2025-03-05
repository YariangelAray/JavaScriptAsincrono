//Declaramos la función asincrónica
const f = async () => {
    //Creamos la promesa 
    let resultado = await new Promise (resolve => setTimeout(resolve, 1000, "Operacion completada")); //Rsolvemos la promesa despues del segundo
    //Mostramos el resultado
    alert(resultado); 
}

f(); //Llamamos a la función