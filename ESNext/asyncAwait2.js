function gerarNumeroEntre(min, max, numerosProibidos) {
  if (min > max) {
    [max, min] = [min, max];
  }

  return new Promise((resolve, reject) => {
    const fator = max - min + 1;
    const aleatorio = parseInt(Math.random() * fator) + min;
    if (numerosProibidos.includes(aleatorio)) {
      reject("Número repetido!");
    } else {
      resolve(aleatorio);
    }
  });
}

async function gerarMegaSena(qtdNumero, tentativas = 1) {
  try {
    const numeros = [];
    for (let _ of Array(qtdNumero).fill()) {
      numeros.push(await gerarNumeroEntre(1, 60, numeros));
    }
    return numeros;
  } catch (error) {
    if (tentativas > 10) {
      throw "Não deu certo!";
    } else {
      gerarMegaSena(qtdNumero, tentativas + 1);
    }
  }
}

gerarMegaSena(8).then(console.log).catch(console.log);
