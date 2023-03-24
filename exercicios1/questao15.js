const comprarCarro = (carro) => {
  switch (carro) {
    case "sedans":
    case "motocicletas":
    case "caminhonetes":
      return "Tem certeza que não prefere este modelo?";
    case "hatch":
      return "Compra efetuada com sucesso.";
    default:
      return "Não trabalhamos com este tipo de automóvel aqui.";
  }
};

console.log(comprarCarro("sedans"));
console.log(comprarCarro("caminhonetes"));
console.log(comprarCarro("hatch"));
console.log(comprarCarro("blabla"));
