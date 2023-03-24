function fun1(vetor, numero) {
  vetor.forEach((valor, i) => {
    vetor[i] = valor * numero;
  });

  return vetor;
}

function fun2(vetor, numero) {
  vetor.forEach((valor, i) => {
    if (numero > 5) {
      vetor[i] = valor * numero;
    }
  });

  return vetor;
}

console.log(fun1([1, 2, 3, 4, 5], 3));
console.log(fun2([1, 2, 3, 4, 5], 11));
