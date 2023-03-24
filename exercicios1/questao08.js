const mostrarPontuacoes = (pontuacoes) => {
  let listaPontuacoesFormatada = pontuacoes
    .split(" ")
    .map((valor) => parseInt(valor));
  let maiorDesempenho = listaPontuacoesFormatada[0];
  let menorDesempenho = listaPontuacoesFormatada[0];
  let posicao = 0;
  let vezes = 0;

  listaPontuacoesFormatada.forEach((elemento, i) => {
    if (elemento > maiorDesempenho) {
      maiorDesempenho = elemento;
      vezes += 1;
    }

    if (elemento < menorDesempenho) {
      [menorDesempenho, posicao] = [elemento, i];
    }
  });

  return [vezes, posicao + 1];
};

console.log(mostrarPontuacoes("10 20 20 8 25 3 0 30 1"));
console.log(mostrarPontuacoes("30 40 20 4 51 25 42 38 56 0"));
