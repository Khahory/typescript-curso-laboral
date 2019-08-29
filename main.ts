//Utilizando el nuevo for of

type Hero = {
    nombre:string,
    arma:string
};

let capitan:Hero = {
    nombre: "Escudo",
    arma: "Droga"
};

let iroman:Hero = {
    nombre: "Iron man",
    arma: "Traje"
};

let thor:Hero = {
    nombre: "Thor",
    arma: "Hacha"
};

let avengers:Hero[] = [thor, capitan, iroman];

for (let i of avengers){
    console.log(i.nombre, i.arma);
}

