//Funciones de flechas (permiten usar el this aunque tenga un setTimeout
// el this no pierde el contexto)
var capitan_america = {
    nombre: "Hulk",
    darOrden_hulk: function (name) {
        setTimeout(function () { return console.log(name + " smash!!!"); }, 1000);
    }
};
capitan_america.darOrden_hulk("Angel");
