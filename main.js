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
