const menorNumero = (numeros) => {
  let menor = numeros[0];

  numeros.reduce((anterior, valor) => {
    if (valor < anterior) {
      menor = valor;
    }
  });

  return menor;
};

console.log(menorNumero([10, 5, 35, 65]));
console.log(menorNumero([5, -15, 50, 3]));
