const filtrarPorQuantidade = (numeros, quantidadeDigitos) => {
  let resultado = [];

  numeros.forEach((elemento) => {
    let tamanho = String(elemento).length;

    if (tamanho === quantidadeDigitos) {
      resultado.push(elemento);
    }
  });

  console.log(resultado);
};

filtrarPorQuantidade([38, 2, 385, 10, 125, 11], 2);
filtrarPorQuantidade([5, 9, 1, 125, 11], 1);
