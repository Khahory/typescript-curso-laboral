//Utilizando el nuevo for of
var capitan = {
    nombre: "Escudo",
    arma: "Droga"
};
var iroman = {
    nombre: "Iron man",
    arma: "Traje"
};
var thor = {
    nombre: "Thor",
    arma: "Hacha"
};
var avengers = [thor, capitan, iroman];
for (var _i = 0, avengers_1 = avengers; _i < avengers_1.length; _i++) {
    var i = avengers_1[_i];
    console.log(i.nombre, i.arma);
}
