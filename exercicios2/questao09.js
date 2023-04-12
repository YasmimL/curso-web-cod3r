const repetir = (elemento, vezes) => {
  let repeticao = [];

  for (let i = 0; i < vezes; i++) {
    repeticao.push(elemento);
  }

  return repeticao;
};

console.log(repetir("código", 2));
console.log(repetir(7, 3));
