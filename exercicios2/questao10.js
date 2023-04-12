const simboloMais = (vezes) => {
  let simbolos = "";

  for (let i = 0; i < vezes; i++) {
    simbolos = simbolos.concat("+");
  }

  return simbolos;
};

console.log(simboloMais(2));
console.log(simboloMais(4));
