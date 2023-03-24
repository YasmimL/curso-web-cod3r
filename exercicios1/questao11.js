const verificarAno = (ano) => {
  if (ano % 400 === 0 || (ano % 100 !== 0 && ano % 4 === 0)) {
    return true;
  } else {
    return false;
  }
};

console.log(verificarAno(1004));
console.log(verificarAno(1172));
console.log(verificarAno(1828));
console.log(verificarAno(2016));
console.log(verificarAno(1999));
console.log(verificarAno(2023));
