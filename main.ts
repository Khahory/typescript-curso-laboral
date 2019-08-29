// Parametros REST
//Pueden resultar utiles en alguna sobrecarga de metodos

function nombreCompleto(nombre:string, ...demasParametros:string[]):string {
    return nombre +" " +demasParametros;
}

let superman:string = nombreCompleto("Angel", "Peres", "de los Satos");
let baman:string = nombreCompleto("Jason");

console.log(superman);
console.log(baman);