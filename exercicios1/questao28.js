const verificarNumeros = (numeros) => {
  let numerosPares = [];
  let numerosImpares = [];

  numeros.forEach((numero) => {
    if (numero % 2 === 0) {
      numerosPares.push(numero);
    } else {
      numerosImpares.push(numero);
    }
  });

  return `Números pares: ${numerosPares} - Números ímpares: ${numerosImpares}`;
};

console.log(verificarNumeros([1, 2, 4, 5, 7, 8]));
