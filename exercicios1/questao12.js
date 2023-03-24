const calcularFatorial = (numero) => {
  let lista = [];
  let fatorial = 1;

  if (numero === 0 || numero === 1) {
    return `${numero}! = 1`;
  }

  for (let i = numero; i >= 1; i--) {
    lista.push(i);
  }

  for (let j = 0; j < lista.length; j++) {
    fatorial = fatorial * lista[j];
  }

  return `${numero}! = ${fatorial}`;
};

console.log(calcularFatorial(0));
console.log(calcularFatorial(1));
console.log(calcularFatorial(5));
console.log(calcularFatorial(10));
