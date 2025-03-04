function delay(ms) {
    //Rrtornamos la promesa
    return new Promise(resolve =>{
        setTimeout(resolve, ms); //Resolvemos la promesa despues de ms milisegundos
    });
}


//Pedimos la cantidad de segundos
let s = parseInt(prompt("Ingrese en cuantos segundos quiere que se resuelva la promesa."));
//llamamos a la función delay que nos retorna una promesa, despues de que se resuelve mostramos el mensaje.
delay(s*1000).then(() => {alert("Se ejecuta despues de " + s + " segundos. La promesa fue resuelta.")});