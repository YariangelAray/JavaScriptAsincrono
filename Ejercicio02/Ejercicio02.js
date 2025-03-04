let i = 0;

setTimeout(() => alert(i), 100);

for (let j = 0; j < 100000000; j++) {
  i++;
}

console.log("Al ser Java Script un lenguaje de programación de un solo hilo, "+
  +"primero se ejecutará el for, porque el setTimeout esta programado para ejecutarse 100 ms despues. "+
  +"Al entrar al for el programa se bloquea y se espera a que el for termine, luego se ejecuta el setTimeout mostrando la variable i con el valor 100000000. "+
  +"\nRespuesta correcta: a");