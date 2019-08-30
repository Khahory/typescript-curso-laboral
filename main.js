System.register(["./Validacion/numeros.js"], function (exports_1, context_1) {
    "use strict";
    var numeros_js_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (numeros_js_1_1) {
                numeros_js_1 = numeros_js_1_1;
            }
        ],
        execute: function () {
            console.log(numeros_js_1.PI);
        }
    };
});
