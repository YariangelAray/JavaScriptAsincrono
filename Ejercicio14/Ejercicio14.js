//creamos una promesa que se resuelve despues de un segundo y nos retorna un número
new Promise(resolve => {

    setTimeout(() => resolve(1), 1000); 
    
}).then(result => {
    // Tomamos el valor de la promesa y lo mostramos en pantalla
    alert(result);
    //Retornamos una nueva promesa que se reuelve con el resultado anterior más uno, despues de un segundo, y así sucesivamente
    return new Promise(resolve => {

        setTimeout(() => resolve(result+1), 1000); 

    })

}).then(result => {
    
    alert(result)
    return new Promise(resolve => {
        
        setTimeout(() => resolve(result+1), 1000); 
    })

}).then(result => {
    // Mostramos el último valor y lo mostramos por consola junto con el resultado final.
    alert(result)
    alert("Resultado final: " + result)

});