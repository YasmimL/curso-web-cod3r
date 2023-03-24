const verificarClassificacao = (nota) => {
  if (nota >= 38) {
    let resto = nota % 5;
    let incremento = 5 - resto;

    if (incremento < 3) {
      nota = nota + incremento;
    }

    console.log(`Nota: ${nota} - Aluno aprovado!`);
  } else if (nota < 38) {
    console.log(`Nota: ${nota} - Aluno reprovado!`);
  }
};

verificarClassificacao(81);
verificarClassificacao(83);
verificarClassificacao(36);
verificarClassificacao(38);
verificarClassificacao(88);
