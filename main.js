// Parametros REST
//Pueden resultar utiles en alguna sobrecarga de metodos
function nombreCompleto(nombre) {
    var demasParametros = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        demasParametros[_i - 1] = arguments[_i];
    }
    return nombre + " " + demasParametros;
}
var superman = nombreCompleto("Angel", "Peres", "de los Satos");
var baman = nombreCompleto("Jason");
console.log(superman);
console.log(baman);
