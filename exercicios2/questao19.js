const calcalarMedia = (numeros) => {
  const soma = numeros.reduce((contador, elemento) => contador + elemento);

  return soma / numeros.length;
};

console.log(calcalarMedia([0, 10]));
console.log(calcalarMedia([1, 2, 3, 4, 5]));
