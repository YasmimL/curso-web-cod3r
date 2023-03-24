function verificarFruta(fruta) {
  switch (fruta) {
    case "maçã":
      return "Não vendemos esta fruta aqui";
    case "kiwi":
      return "Estamos com escassez de kiwis";
    case "melancia":
      return "Aqui está, são 3 reais o quilo”.";
    default:
      return "Erro, fruta inválida";
  }
}

console.log(verificarFruta("maçã"));
console.log(verificarFruta("kiwi"));
console.log(verificarFruta("melancia"));
console.log(verificarFruta("banana"));
