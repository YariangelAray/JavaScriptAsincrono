let datos = {}; //Creamos un objeto vacio.

datos = new Proxy(datos, {

  set (datos, propiedad, valor) {

    try {
      
      // Validamos que el valor no esté vacío
      if (valor === "") {
        throw new Error(`El valor de "${propiedad}" no puede estar vacío.`);
      }
  
      // Validación de números
      if ( propiedad === "numerico"  && !/^\d+$/.test(valor)) {
        throw new TypeError("Solo se permiten ingresar datos numéricos.");
      }
  
      // Validación de texto alfanumérico, solo letras
      if ( propiedad === "alfanumerico"  && !/^[a-z]+$/i.test(valor)) {
        throw new TypeError("Solo se permiten ingresar letras.");
      }
  
      // Validación de email
      if ( propiedad === "email"  && !/^[\w\d._%+-]+@[\w.-]+\.[a-zA-Z]{2,6}$/.test(valor)) {
        throw new TypeError("El correo electrónico ingresado es inválido.");
      }
      
      // Validación de fecha con formato dd/mm/yyyy
      if ( propiedad === "date"  && !/^([0-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/(\d{4})$/.test(valor)) {
        throw new TypeError("La fecha ingresada es inválida.");
      }
  
      // Si el dato es numérico, lo convertimos a entero antes de asignarlo
      datos[propiedad] = propiedad === "numerico" ? parseInt(valor) : valor;
      return true;

    } catch (error) {
      //Capturamos el error y lo mostramos en una alerta
      alert(`Error en la propiedad "${propiedad}":  ${error.message}`);
      console.error(error);
      return false;
    }
  }
})

datos.numerico = prompt("Ingrese un número:");
datos.alfanumerico = prompt("Ingrese solo letras:");
datos.email = prompt("Ingrese su correo electrónico:");
datos.date = prompt("Ingrese una fecha (dd/mm/yyyy):");


console.log(datos);