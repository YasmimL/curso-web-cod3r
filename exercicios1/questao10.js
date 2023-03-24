const verificaNumero = (numero) => {
  if (numero % 3 === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(verificaNumero(3));
console.log(verificaNumero(9));
console.log(verificaNumero(27));
console.log(verificaNumero(70));
