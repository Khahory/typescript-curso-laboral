var Avenger = /** @class */ (function () {
    function Avenger(nombre, arma) {
        this.nombre = nombre;
        this.arma = arma;
    }
    return Avenger;
}());
var thor = new Avenger("Thor", "Mjolnir");
var iroman = new Avenger("Iroman", "IA");
var capi = new Avenger("Capitan America", "Droga");
var vengadores = [thor, iroman, capi];
for (var _i = 0, vengadores_1 = vengadores; _i < vengadores_1.length; _i++) {
    var i = vengadores_1[_i];
    console.log("Vengador: " + i.nombre + ", con su arma " + i.arma);
}
