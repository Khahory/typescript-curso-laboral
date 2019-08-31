// Creando clases genericas
class Cuadrado<T extends number|string>{ //Le estoy diciendo que solo puede aceptar num y str en el generico
    base:T;
    altura:T;
    area():number{
        return +this.base * +this.altura; //El + es para convertir de str a num (por si viene str)
    }
}

let cuadrado = new Cuadrado();
cuadrado.altura = "10";
cuadrado.base = 10;
console.log(cuadrado.area());

let cuadrado2 = new Cuadrado<string|number>(); //Decimos que solo acepte str o num (puede ser util)
cuadrado2.altura = "10";
cuadrado2.base = "10";
console.log(cuadrado.area());







//Creando arreglos genericos
let familia:Array<string> = ["Mami", "Jason", "Aura"];
familia.push("123");

let familia2:string[] = ["Ambio", "Yamilet"]; //Dice el profe que es lo mismo solo que
// declarado diferente





//Creando funciones genericas (Para que puedan reconocer de que tipo de dato es)
function regresar<T>(arg:T) {
    return arg;
}

type Hero = {
    nombre:string,
    alias:string
}

type Villano = {
    muertes:number,
    odio:string
}

let deadpool = {
    nombre: "DeadPool",
    nombreReal: "Wade",
    poder: "Regeneracion",
    odio: "Mucho",
    alias: "Cabron",
    muertes: 100
}

console.log(    regresar<Hero>(deadpool).alias  );
console.log(    regresar<Villano>(deadpool).odio  );
//Dependiendo del tipo que sea pues mostrara sus metodos
//correspondientes