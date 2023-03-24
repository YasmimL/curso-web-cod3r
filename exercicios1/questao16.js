const realizarOperacao = (valor1, operador, valor2) => {
  switch (operador) {
    case "+":
      console.log(`${valor1} + ${valor2} = ${valor1 + valor2}`);
      break;

    case "-":
      console.log(`${valor1} - ${valor2} = ${valor1 - valor2}`);
      break;

    case "*":
      console.log(`${valor1} * ${valor2} = ${valor1 * valor2}`);
      break;

    case "/":
      console.log(`${valor1} / ${valor2} = ${valor1 / valor2}`);
      break;

    default:
      console.log("Operação inválida.");
  }
};

realizarOperacao(4, "+", 4);
realizarOperacao(8, "-", 3);
realizarOperacao(5, "*", 5);
realizarOperacao(12, "/", 3);
realizarOperacao(4, "#", 9);
