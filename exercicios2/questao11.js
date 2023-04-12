const receberPrimeiroEUltimoElemento = (array) => {
  let arrayAlterado = [array[0], array.pop()];

  return arrayAlterado;
};

console.log(receberPrimeiroEUltimoElemento([7, 14, "olá"]));
console.log(receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]));
