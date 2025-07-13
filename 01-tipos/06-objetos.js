// personajes de televisión

let nombre = "Hola mundo";
let anime = "Dragon Ball";
let edad = 30;

let personaje = {
    nombre: "Walter White",
    alias: "Heisenberg",
    edad: 50,
    ocupacion: "Profesor de Química",
    estado: "Fallecido",
    habilidades: ["Química", "Liderazgo", "Estrategia"]
};

// par llave y valor

let personaje3 = {
  nombre: "Goku",
  anime: "Kakarotto",
  edad: 40,
};

let personaje2 = {};

console.log(personaje2);
console.log(personaje);
console.log(personaje3);
console.log(personaje.nombre);
console.log(personaje['nombre']);

console.log(personaje.habilidades[0]); // Acceso a un elemento del array de habilidades

personaje.edad = 20;