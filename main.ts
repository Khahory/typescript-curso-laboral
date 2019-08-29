function saludar(nombre:string):string {
    return nombre;
}

function sumar(a: number, b: number):number {
    return a + b;
}

//Variables tipo funcion
let miFuncion: (a:string) => string; //Aplicamos () => return(string, number,etc)
// parametros si se requieren en la funcion que meteremos en este let

miFuncion = saludar;
console.log(miFuncion("angel 2"));

//miFuncion = sumar(10,30);
//console.log(miFuncion);
