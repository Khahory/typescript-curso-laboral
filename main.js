//Parametros por defectos
function nombreCompleto(nombre, apellido, capitalizado //Esto es un parametro por defecto
) {
    if (capitalizado === void 0) { capitalizado = true; }
    if (capitalizado) {
        return capitalizar(nombre) + " " + capitalizar(apellido);
    }
    else {
        return nombre + " " + apellido;
    }
}
function capitalizar(palabra) {
    return palabra.charAt(0).toUpperCase() + palabra.substr(1).toLowerCase();
}
var nombre = nombreCompleto("angel", "perez");
console.log(nombre);
