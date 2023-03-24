const verificarQtdNumerosNegativos = (valores) => {
  let qtdNumerosNegativos = 0;

  valores.forEach((valor) => {
    if (valor < 0) {
      qtdNumerosNegativos++;
    }
  });

  return `Quantidade de números negativos: ${qtdNumerosNegativos}`;
};

console.log(
  verificarQtdNumerosNegativos([10, 5, -7, 3, -1, 3, -11, -20, 6, 9])
);
