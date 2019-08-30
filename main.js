//Crear constructores privados, solo llamarlos en su misma clase
var Apocalipsis = /** @class */ (function () {
    function Apocalipsis(name) {
        this.name = name;
    }
    Apocalipsis.llamarApocalipsis = function () {
        if (!Apocalipsis.instancia) {
            Apocalipsis.instancia = new Apocalipsis("Soy el unico!!!");
        }
        return Apocalipsis.instancia;
    };
    return Apocalipsis;
}());
var real = Apocalipsis.llamarApocalipsis();
console.log(real);
