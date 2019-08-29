//Trabajando con enum
var Volumen;
(function (Volumen) {
    Volumen[Volumen["min"] = 10] = "min";
    Volumen[Volumen["medio"] = 51] = "medio";
    Volumen[Volumen["max"] = 100] = "max";
})(Volumen || (Volumen = {}));
var audio = Volumen.medio;
console.log("El volumen esta a: " + audio);
