
//Seria una clase de tipo Heroe
type Heroe = {
    nombre:string,
    getEdad:() => string
};

let Iroman:Heroe = {
    nombre: "Tony",
    getEdad(){
        return this.nombre
    }
};