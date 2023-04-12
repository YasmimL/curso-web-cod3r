const multiplicar = (num1, num2) => {
  let resultado = 0;

  for (let i = 1; i <= num1; i++) {
    resultado += num2;
  }

  console.log(resultado);
};

multiplicar(5, 5);
multiplicar(0, 7);
multiplicar(6, 2);
