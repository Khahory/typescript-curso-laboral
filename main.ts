//Decirle a typescript que me trabaje con este tipo de valor en especifico
//Convertir de any a other

let cualquierValor:any = "Cualquier cosa";
let largoCadena:number = (<string>cualquierValor).length;
console.log(largoCadena);