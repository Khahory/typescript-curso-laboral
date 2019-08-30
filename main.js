//Interface con clases
var Persona = /** @class */ (function () {
    function Persona() {
    }
    Persona.prototype.moverse = function (como) {
        console.log("Me desplazo: " + como);
    };
    return Persona;
}());
var angel = new Persona();
angel.nombre = "Angel";
angel.moverse("corriendo");
console.log(angel);
