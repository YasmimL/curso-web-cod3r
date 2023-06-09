Array.prototype.filter2 = function (callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};

const produtos = [
  { nome: "Notebook", preco: 2499, fragil: true },
  { nome: "iPade Pro", preco: 4199, fragil: true },
  { nome: "Copo de Vidro", preco: 12.49, fragil: true },
  { nome: "Copo de Plástico", preco: 18.99, fragil: false },
];

const verificarProdutoFragil = (produto) => produto.fragil;
const verificarPreco = (produto) => produto.preco >= 500;

const resultado = produtos
  .filter2(verificarProdutoFragil)
  .filter2(verificarPreco);
console.log(resultado);
