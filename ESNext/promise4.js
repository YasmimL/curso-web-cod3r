function gerarNumeroEntre(min, max, tempo) {
  if (min > max) {
    [max, min] = [min, max];
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      const fator = max - min + 1;
      const aleatorio = parseInt(Math.random() * fator) + min;
      resolve(aleatorio);
    }, tempo);
  });
}

console.time("promise");

const gerarVariosNumeros = () => {
  return Promise.all([
    gerarNumeroEntre(1, 60, 4000),
    gerarNumeroEntre(1, 60, 1000),
    gerarNumeroEntre(1, 60, 500),
    gerarNumeroEntre(1, 60, 3000),
    gerarNumeroEntre(1, 60, 3000),
    gerarNumeroEntre(1, 60, 1500),
  ]);
};

gerarVariosNumeros()
  .then(console.log)
  .then(() => console.timeEnd("promise"));
