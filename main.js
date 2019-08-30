var Avenger = /** @class */ (function () {
    function Avenger(name, team) {
        this.nombre = "Sin name";
        this.equipo = undefined;
        this.nombreReal = undefined;
        this.puedPelear = false;
        this.nombre = name;
        this.equipo = team;
    }
    return Avenger;
}());
var antman = new Avenger("Antman", "Capi");
console.log(antman);
