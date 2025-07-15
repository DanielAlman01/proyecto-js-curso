// Ejercicio 1

let tamanoArchivo = 6;
let tamanoMax = 5;

if(tamanoArchivo <= tamanoMax){
  console.log("el archivo cumple con el tamano")
} else{
  console.log("el archivo no cumple con el tamnano")
}

// Ejercicio 2

let contarsena = "1234536789122";
let caracteres = 12;

if (contarsena.length >= caracteres){
  console.log("la contrasena es segura")
} else{
  console.log("la contrasena no es segura")

}

// Ejercicio 3

let agua = false;
let estado = false;
let temperatura = 0;

if(agua){
  estado = true;
  console.log("pava encendida")
} else {
  console.log("no se puede ensender")
}


for(temperatura = 0; temperatura <= 100; temperatura += 25){
  if (temperatura === 100){
    estado = false
  }
  console.log("la temperatura es de: " + temperatura);
}

if (temperatura >= 100){
  console.log("la temperatura de la pava a llegado a su maximo")
  estado = false;
  console.log("Ahora tienes la agua caliente: " + temperatura)
}

// Ejercicio 4

let dispositivo = "mac"

switch (dispositivo){
  case 'telefono':
    console.log("potencia de 25w")
    break;
  case 'mac':
    console.log("potencia de 65w")
    break;
  case 'usb':
    console.log("potencia de 5w")
    break;
  default:
    console.log("0");
    break;
}

// Ejercicio 4

let contenedorMolino = true;
let numTazas = 5;
let tiempoPorTaza = 60;

if (contenedorMolino){
  console.log("Se puede encender el molino");
}else{
  console.log("No puede encender el molino");
}

if (numTazas <= 0){
  console.log("No se ha seleccionado el numero de tazas"); 
}else{

  let contador = tiempoPorTaza * numTazas;

  console.log("Esta iniciando el proceso"); 
  console.log("Numero de taza: " + numTazas + " tiempo que tomara: " + contador + "s")
}




