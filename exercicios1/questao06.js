const jurosSimples = (capitalInicial, taxaJuros, tempo) => {
  return `Jsimples = ${capitalInicial * taxaJuros * tempo}`;
};

const jurosComposto = (capitalInicial, taxaJuros, tempo) => {
  let montante = capitalInicial * (1 + taxaJuros) ** tempo;
  return `Jcomposto = ${(montante - capitalInicial).toFixed(3)}`;
};

console.log(jurosSimples(960, 0.025, 8));
console.log(jurosComposto(15000, 0.1, 3));
