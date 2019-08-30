class Avenger {
    nombre:string = "Sin name";
    equipo:any = undefined;
    nombreReal:any = undefined;
    puedPelear:boolean = false;

    constructor(name:string, team:string){
        this.nombre = name;
        this.equipo = team;
    }
}

let antman:Avenger = new Avenger("Antman", "Capi");

console.log(antman);