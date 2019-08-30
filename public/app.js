var Validaciones;
(function (Validaciones) {
    Validaciones.numeroValidar = 5;
})(Validaciones || (Validaciones = {}));
//Esto sirve para importar namespaces de otros archivos
/// <reference path="Validacion/Validaciones.ts"/>
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.publicar = function () {
        console.log(Validaciones.numeroValidar);
    };
    return Main;
}());
var txt = new Main();
txt.publicar();
