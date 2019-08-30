function enviarPersona(persona) {
    console.log("Se fue: " + persona.nombre);
}
;
//Creando objeto
var angel = {
    nombre: "Angel",
    llorar: function (why) {
        console.log("Esta llorando por: " + why);
    }
};
enviarPersona(angel);
