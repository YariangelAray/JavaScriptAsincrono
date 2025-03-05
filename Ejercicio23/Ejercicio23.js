let datos = {};
datos = new Proxy(datos, {

  set (datos, propiedad, valor) {
    
    if (!/^[\w\d\D\W]+$/.test(valor)) {
      throw new Error("No se pueden ingresar espacios en blanco ni al inicio ni al final.");
    }

    if ( propiedad === "numerico"  && !/^\d+$/.test(valor)) {
      throw new TypeError("Solo se permiten ingresar datos numéricos.");
    }

    if ( propiedad === "alfanumerico"  && !/^\w+$/.test(valor)) {
      throw new TypeError("Solo se permiten ingresar letras.");
    }

    if ( propiedad === "email"  && !/^[\w\d\._+-]+@[\w\.-]+\.[\w]{2,6}$/.test(valor)) {
      throw new TypeError("El correo electrónico ingresado es inválido.");
    }

    if ( propiedad === "date"  && !/^([0-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/(\d{4})$/.test(valor)) {
      throw new TypeError("La fecha ingresada es inválida.");
    }

    datos[propiedad] = propiedad === "numerico" ? parseInt(valor) : valor;
    return true;
  }
})

datos.numerico = "100";
datos.alfanumerico = "hola";
datos.email = "gabrielamunar4@gmail.com";
datos.date = "14/03/2025";

console.log(datos);