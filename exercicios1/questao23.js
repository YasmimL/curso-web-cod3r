const calcularPesoDaNota = (notas) => {
  let maiorNota = notas[0];
  let notasComPeso = [];

  notas.forEach((nota) => {
    if (nota > maiorNota) {
      maiorNota = nota;
    }
  });

  notas.forEach((nota) => {
    if (nota === maiorNota) {
      notasComPeso.push(maiorNota * 4);
    } else {
      notasComPeso.push(nota * 3);
    }
  });

  return notasComPeso;
};

const calcularMedia = (codigo, nota1, nota2, nota3) => {
  let notas = [nota1, nota2, nota3];
  let somaNotasComPeso = 0;
  let media = 0;
  let notasComPeso = calcularPesoDaNota(notas);

  notasComPeso.forEach((nota) => {
    somaNotasComPeso += nota;
  });

  media = somaNotasComPeso / 10;

  if (media >= 5) {
    return `Código: ${codigo} - Notas: ${notas} - Média: ${media} - APROVADO`;
  } else if (media < 5) {
    return `Código: ${codigo} - Notas: ${notas} - Média: ${media} - REPROVADO`;
  }
};

console.log(calcularMedia(123, 8, 5, 9));
console.log(calcularMedia(456, 4, 4, 3));
