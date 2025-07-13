let resultado = (8/(2*(2+2)));
console.log(resultado); 


function encontrarMaximo(numeros) {
  let maximo = numeros[0];
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maximo) {
;
    }
  }
  return maximo;
}

// Para probar tu función:
console.log(encontrarMaximo([1, 5, 2, 8, 3])); // Debería mostrar 8
console.log(encontrarMaximo([-1, -5, -2, -8, -3])); // Debería mostrar -1  