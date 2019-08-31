System.register([], function (exports_1, context_1) {
    "use strict";
    var PI;
    var __moduleName = context_1 && context_1.id;
    function restar(num1, num2) {
        return num1 - num2;
    }
    exports_1("restar", restar);
    return {
        setters: [],
        execute: function () {
            exports_1("PI", PI = 3.14155);
        }
    };
});
