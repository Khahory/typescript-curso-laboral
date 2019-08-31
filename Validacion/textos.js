System.register([], function (exports_1, context_1) {
    "use strict";
    var MENSAJES;
    var __moduleName = context_1 && context_1.id;
    function obtenerError(numError) {
        return MENSAJES[numError];
    }
    exports_1("obtenerError", obtenerError);
    return {
        setters: [],
        execute: function () {
            MENSAJES = [
                "El texto es muy corto",
                "El texto es muy largo"
            ];
        }
    };
});
