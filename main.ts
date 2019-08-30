interface Persona {
    nombre:string;
    llorar(why:string):void;
}

function enviarPersona(persona:Persona) {
    console.log("Se fue: " +persona.nombre);
};


//Creando objeto
let angel = {
    nombre: "Angel",
    llorar(why: string): void {
        console.log("Esta llorando por: " +why);
    }
};

enviarPersona(angel);

