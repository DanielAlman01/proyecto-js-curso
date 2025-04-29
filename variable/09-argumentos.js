/**
 * Son parametros cuando le damos los valores a las funciones al momento de llamarlas
 */

function suma(a, b){
    console.log(arguments);
    return a + b;
}

/**
 * Son argumentos cuando le damos los valores a las funciones al momento de llamarlas
 */

let resultado = suma(5, 6, 1, 2, 3);
console.log(resultado);
console.log(typeof suma);
