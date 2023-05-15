const funcionarOuNao = (valor, chanceErro) => {
  return new Promise((resolve, reject) => {
    if (Math.random() < chanceErro) {
      reject("Ocorreu um erro!");
    } else {
      resolve(valor);
    }
  });
};

funcionarOuNao("Testando...", 0.9)
  .then((valor) => console.log(`Valor: ${valor}`))
  .catch((error) => console.log(`Erro: ${error}`))
  .then(() => console.log("Fim!"));
