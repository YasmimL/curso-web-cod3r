let valor; // não inicializada
console.log(valor);

valor = null;
console.log(valor);
// console.log(valor.toString()); // Erro!

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.5;
console.log(produto);

produto.preco = undefined; // evite atribuir undefined
console.log(!!undefined);
console.log(produto);

produto.preco = null; // sem preço
console.log(!!produto.preco);
console.log(produto);
