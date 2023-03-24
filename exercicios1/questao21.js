const identificarValor = (idade) => {
  if (idade < 10) {
    return "Valor a pagar: R$ 180,00";
  } else if (idade > 10 && idade <= 30) {
    return "Valor a pagar: R$ 150,00";
  } else if (idade > 30 && idade <= 60) {
    return "Valor a pagar: R$ 195,00";
  } else {
    return "Valor a pagar: R$ 230,00";
  }
};

console.log(identificarValor(8));
console.log(identificarValor(20));
console.log(identificarValor(50));
console.log(identificarValor(70));
