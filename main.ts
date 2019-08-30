//Interface con clases

interface SerVivo {
    nombre:string;
    edad?:number;
    moverse(como:string):void;
}

class Persona implements SerVivo{
    nombre:string;
    moverse(como: string): void {
        console.log("Me desplazo: " +como);
    }
}

let angel = new Persona();
angel.nombre = "Angel";
angel.moverse("corriendo");

console.log(angel);