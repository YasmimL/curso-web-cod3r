const calcularNovoSalario = (plano, salarioAtual) => {
  let novoSalario = 0;
  switch (plano) {
    case "A":
      novoSalario = (salarioAtual * 10) / 100 + salarioAtual;
      console.log(`Plano A com 10% - Salário novo: ${novoSalario}`);
      break;
    case "B":
      novoSalario = (salarioAtual * 15) / 100 + salarioAtual;
      console.log(`Plano B com 15% - Salário novo: ${novoSalario}`);
      break;
    case "C":
      novoSalario = (salarioAtual * 20) / 100 + salarioAtual;
      console.log(`Plano C com 20% - Salário novo: ${novoSalario}`);
      break;
    default:
      console.log("Plano inválido.");
  }
};

calcularNovoSalario("A", 1000);
calcularNovoSalario("B", 1000);
calcularNovoSalario("C", 1000);
calcularNovoSalario("D", 1000);
