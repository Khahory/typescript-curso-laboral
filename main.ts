//Crear nuestro decorador para que las funciones no se puedan sobreescribir con booleano
function editable(esEditable:boolean){
    return function (target: any, nombrePropiedad: string, descriptor: PropertyDescriptor) {
        descriptor.writable = esEditable;
    }
}

class Hero {
    constructor(public nombre:string){};

    @editable(false)
    plan(){
        console.log("Salvar al mundo");
    }
}

let spiderMan = new Hero("Peter");
spiderMan.plan = function () {
    console.log("Destruir el mundo");
}
spiderMan.plan();




console.error("siguiente");
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

@imprimirConsola(true)
class Villano {
    constructor(public nombre:string){}
}

let angel = new Villano("Angel Maria");
