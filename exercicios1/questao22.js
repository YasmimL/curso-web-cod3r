const calcularValorAnuidade = (mes, anuidade) => {
  if (mes > 0 && mes < 13) {
    return `Valor a ser pago R$ ${(anuidade * (1 + 0.05) ** (mes - 1)).toFixed(
      2
    )}`;
  } else {
    return "Mês inválido.";
  }
};

console.log(calcularValorAnuidade(4, 100));
