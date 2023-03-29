// Pode modificar e deletar propriedades, mas não pode adicionar
const produto = Object.preventExtensions({
  nome: "Qualquer",
  preco: 1.99,
  tag: "promoção",
});
console.log("Extensível: ", Object.isExtensible(produto));

produto.nome = "Borracha";
produto.descricao = "Borracha escolar branca";
delete produto.tag;
console.log(produto);

// Object.seal - pode modificar os valores mas não pode adicionar ou excluir propriedades
const pessoa = { nome: "Juliana", idade: 35 };
Object.seal(pessoa);
console.log("Selado: ", Object.isSealed(pessoa));

pessoa.sobrenome = "Silva";
delete pessoa.nome;
pessoa.idade = 29;
console.log(pessoa);

// Object.freeze -  não pode modificar, adicionar nem deletar propriedades
