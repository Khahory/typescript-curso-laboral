
//Crear constructores privados, solo llamarlos en su misma clase

class Apocalipsis {
    static instancia:Apocalipsis;
    private constructor(public name:string){

    }

    static llamarApocalipsis(){
        if (!Apocalipsis.instancia){
            Apocalipsis.instancia = new Apocalipsis("Soy el unico!!!");
        }

        return Apocalipsis.instancia;
    }
}

let real = Apocalipsis.llamarApocalipsis();
console.log(real);