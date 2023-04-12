const somarNumeros = (array) => {
  const resultado = array.reduce(
    (acumulador, elemento) => acumulador + elemento
  );

  return resultado;
};

console.log(somarNumeros([10, 10, 10]));
console.log(somarNumeros([15, 15, 15, 15]));
