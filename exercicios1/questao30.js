const verificarMaiorEMenorValor = (numeros) => {
  let menorNumero = numeros[0];
  let maiorNumero = numeros[0];

  numeros.forEach((numero) => {
    if (numero < menorNumero) {
      menorNumero = numero;
    }

    if (numero > maiorNumero) {
      maiorNumero = numero;
    }
  });

  return `Maior valor: ${maiorNumero} - Menor valor: ${menorNumero}`;
};

console.log(verificarMaiorEMenorValor([2, 5, 6, 0, 20, 4, 40, -1]));
console.log(verificarMaiorEMenorValor([10, 5, 7, 3, 1, 3, 11, 20, 6, 9]));
