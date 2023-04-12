const funcaoDaSorte = (numero) => {
  const min = 1;
  const max = 10;

  const numeroAleatorio = Math.floor(Math.random() * (max - min + 1) + min);

  if (numero === numeroAleatorio) {
    return `Parabéns! O número sorteado doi o ${numeroAleatorio}`;
  } else {
    return `Que pena! O número sorteado foi o ${numeroAleatorio}`;
  }
};

console.log(funcaoDaSorte(1));
console.log(funcaoDaSorte(2));
console.log(funcaoDaSorte(10));
console.log(funcaoDaSorte(5));
