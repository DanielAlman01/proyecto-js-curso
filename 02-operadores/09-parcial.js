// Ejercicio 1

let precioTienda1A = 150;
let precioTienda2B = 130;

console.log(precioTienda1A > precioTienda2B);
console.log(precioTienda1A === precioTienda2B);

// Ejercicio 2

let rol1 = "usuario";
let rol2 = "moderador";
let rol3 = "propietario";

let daniel = rol2;
let maria = rol1;
let itzel = rol3;

function modificacion(tipo){
  let editores = tipo === "moderador" || tipo === "propietario" ? "puede hacer modificaciones" : "no puede realizar las modificaciones";

  return editores;
}

console.log("Daniel: " + modificacion(daniel) + " " + daniel);
console.log("Maria: " + modificacion(maria));
console.log("Itzel: " + modificacion(itzel));

let evaluarUsuario = daniel === "moderador" || daniel === "propietario";

console.log(evaluarUsuario);

// Ejercicio 3

daniel = "free";
maria = "pago"

function planUsuario(a){
 let planUsuario = a === "pago"

 return planUsuario
}

console.log(planUsuario(daniel))
console.log(planUsuario(maria))


// Ejercicio 4

let largo = 4;
let ancho = 3.8;

let calculoArea = largo * ancho;

let unaTonelada = calculoArea < 15;


// EJERCIO 5

let molinoConectado = true;
let molinoPorConectar = false;

let prenderMolino = molinoConectado && molinoPorConectar;

console.log(molinoConectado);
console.log(molinoPorConectar);
console.log("El molino puede ensenderse: " + prenderMolino);