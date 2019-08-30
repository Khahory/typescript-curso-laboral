System.register(["./Validacion/numeros.js", "./Validacion/textos.js"], function (exports_1, context_1) {
    "use strict";
    var numeros_js_1, textos;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (numeros_js_1_1) {
                numeros_js_1 = numeros_js_1_1;
            },
            function (textos_1) {
                textos = textos_1;
            }
        ],
        execute: function () {
            console.log(numeros_js_1.PI);
            console.log(textos.obtenerError(1));
        }
    };
});
