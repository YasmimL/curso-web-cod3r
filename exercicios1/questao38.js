const imprimirImpares = (inicio = 0, fim = 100) => {
  let numImpares = [];

  if (inicio > fim) {
    let aux = inicio;
    inicio = fim;
    fim = aux;
  }

  for (let i = inicio; i <= fim; i++) {
    if (!(i % 2 == 0)) {
      numImpares.push(i);
    }
  }

  return numImpares;
};

console.log(imprimirImpares());
console.log(imprimirImpares(19, 3));
