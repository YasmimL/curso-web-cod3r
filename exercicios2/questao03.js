const calcularSalario = (qtdHoras, ganhoPorHora) => {
  const salarioBruto = qtdHoras * ganhoPorHora;
  const salarioLiquido = salarioBruto - (salarioBruto * 30) / 100;
  return `Salário igual a R$ ${salarioLiquido}`;
};

console.log(calcularSalario(180, 60));
