class Avenger {
    nombre: string;
    arma: string;

    constructor(nombre: string, arma: string) {
        this.nombre = nombre;
        this.arma = arma;
    }
}
    let thor = new Avenger("Thor", "Mjolnir");
    let iroman = new Avenger("Iroman", "IA");
    let capi = new Avenger("Capitan America", "Droga");

    let vengadores:Avenger[] = [thor, iroman, capi];

    for(let i of vengadores){
        console.log(`Vengador: ${i.nombre}, con su arma ${i.arma}`)
    }
