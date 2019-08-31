
//Creando funciones genericas (Para que puedan reconocer de que tipo de dato es)

function regresar<T>(arg:T) {
    return arg;
}

console.log(  regresar("Hola amigos").charAt(2)  );
console.log(  regresar(10.12421).toFixed(2)  );
console.log(  regresar(new Date()).getTime()  );