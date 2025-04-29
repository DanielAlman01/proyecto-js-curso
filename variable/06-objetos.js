// Personajes de tv 
let nombre = "Daniel";
let anime = "Demon slayer";
let edad = 16;

let personaje = {
    nombre: "Danie",
    anime: "Demo slayer",
    edad: 16,
};

console.log(personaje);
console.log(personaje.anime);
console.log(personaje['nombre']);

personaje.edad = 13;

personaje['edad'] = 16;

delete personaje.nombre;

console.log(personaje)