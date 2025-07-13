// Tipado dinámico
let numero = 42; // número puede ser un entero
let texto = "Hola"; // texto es una cadena de caracteres
let booleano = true; // booleano es un valor booleano 
let nombre = "Hola mundo"; // nombre es una cadena de caracteres
nombre = 123; // ahora nombre es un número, demostrando el tipado dinámico
let noDefinido; // noDefinido es undefined, no tiene valor asignado
let nulo = null; // nulo es un valor explícito que indica ausencia de valor


//typeof Devuelve el tipo de dato de una variable


console.log(typeof nombre); // "string"
console.log(typeof numero); // "number"
console.log(typeof verdadero); // "boolean"
console.log(typeof undef); // "undefined"
console.log(typeof nulo); // "object"