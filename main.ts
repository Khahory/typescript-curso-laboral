
//Esto sirve para importar namespaces de otros archivos
/// <reference path="Validacion/Validaciones.ts"/>

class Main {
    publicar():void{
        console.log(Validaciones.numeroValidar);
    }
}

let txt = new Main();
txt.publicar();