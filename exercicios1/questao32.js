const calcularMediaAritmetica = (valores) => {
  let somaValores = 0;
  let media = 0;

  valores.forEach((valor) => {
    somaValores += valor;
  });

  media = (somaValores / valores.length).toFixed(2);

  return `Média = ${media}`;
};

console.log(calcularMediaAritmetica([1, 2, 3, 4, 5]));
