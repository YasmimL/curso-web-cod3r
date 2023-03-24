const mostrarDinheiro = (valor) => {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};

console.log(mostrarDinheiro(0.30000000000000004));
