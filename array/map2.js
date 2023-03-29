const carrinho = [
  '{"nome": "Borracha", "preco": 3.45}',
  '{"nome": "Caderno", "preco": 13.90}',
  '{"nome": "Kit de Lapis", "preco": 41.22}',
  '{"nome": "Caneta", "preco": 7.50}',
];

// Retornar um array apenas com os preços

const transformaJson = (json) => JSON.parse(json);
const carrinhoPreco = (item) => item.preco;

const resultado = carrinho.map(transformaJson).map(carrinhoPreco);
console.log(resultado);
