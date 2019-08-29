//Parametros por defectos
function nombreCompleto(
    nombre:string, apellido:string, capitalizado:boolean = true //Esto es un parametro por defecto
):string {
    if (capitalizado){
        return capitalizar(nombre) +" " +capitalizar(apellido);
    }else {
return nombre +" " +apellido;
}
}

function capitalizar(palabra:string):string {
    return palabra.charAt(0).toUpperCase() + palabra.substr(1).toLowerCase();
}

let nombre = nombreCompleto("angel", "perez");
console.log(nombre);