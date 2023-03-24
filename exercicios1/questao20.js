const verificarNotas = (valor) => {
  let resto = 0;
  if (valor >= 100) {
    let notas100 = Math.trunc(valor / 100);
    resto = valor % 100;
    valor = resto;

    console.log(`${notas100} nota(s) de R$ 100`);
  }

  if (valor < 100 && valor > 50) {
    let notas50 = Math.trunc(valor / 50);
    resto = valor % 50;
    valor = resto;

    console.log(`${notas50} nota(s) de R$ 50`);
  }

  if (valor < 50 && valor > 10) {
    let notas10 = Math.trunc(valor / 10);
    resto = valor % 10;
    valor = resto;

    console.log(`${notas10} nota(s) de R$ 10`);
  }

  if (valor < 10 && valor > 5) {
    let notas5 = Math.trunc(valor / 5);
    resto = valor % 5;
    valor = resto;

    console.log(`${notas5} nota(s) de R$ 5`);
  }

  if (valor < 5 && valor > 1) {
    let notas1 = Math.trunc(valor / 1);
    resto = valor % 1;
    valor = resto;

    console.log(`${notas1} nota(s) de R$ 1`);
  }
};

// verificarNotas(120);
verificarNotas(18);
