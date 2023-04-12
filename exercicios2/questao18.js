const calcularTotalDespesas = (produtos) => {
  let contador = 0;
  produtos.forEach((elemento) => {
    contador += elemento.preco;
  });

  return contador;
};

console.log(
  calcularTotalDespesas([
    {
      nome: "Jornal online",
      categoria: "Informação",
      preco: 89.99,
    },
    { nome: "Cinema", categoria: "Entretenimento", preco: 150 },
  ])
);

console.log(
  calcularTotalDespesas([
    {
      nome: "Galaxy S20",
      categoria: "Eletrônicos",
      preco: 3599.99,
    },
    {
      nome: "Macbook Pro",
      categoria: "Eletrônicos",
      preco: 30999.9,
    },
  ])
);
