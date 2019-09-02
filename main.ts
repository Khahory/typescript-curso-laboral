//Decorador clase normal
function cinsola(constructor: Function) {
    console.log(constructor); //Aqui podemos usar los parametros que tiene el constructor (this.nombre en prototype)
}

//Decorador Factory
function imprimirConsola(imprimir:boolean):Function {
    if (imprimir){
        return cinsola;
    }else {
        return null;
    }
}

@imprimirConsola(false)
class Villano {
    constructor(public nombre:string){}
}

let angel = new Villano("Angel Maria");
