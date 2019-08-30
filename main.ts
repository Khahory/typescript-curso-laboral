
// Clases abtractas, moldes para las clases hijas

abstract class SerVivo {
    constructor(public nombre:string, public edad:number){

    }
}

class Humano extends SerVivo{

}

let persona = new Humano("Angel", 20);
console.log(persona);