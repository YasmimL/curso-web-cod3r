const verificarIntervalo = (numeros) => {
  let numerosNoIntervalo = 0;
  let numerosForaDoIntervalo = 0;

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] >= 10 && numeros[i] <= 20) {
      numerosNoIntervalo += 1;
    } else {
      numerosForaDoIntervalo += 1;
    }
  }

  numerosForaDoIntervalo += 1;
  return `Números no intervalo: ${numerosNoIntervalo} - Números fora do intervalo: ${numerosForaDoIntervalo}`;
};

console.log(verificarIntervalo([1, 5, 6, 13, 18, 20, 25, 30, 37]));
