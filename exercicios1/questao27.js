const calcularAltura = (altura1, taxa1, altura2, taxa2) => {
  let menorAltura = 0;
  let maiorAltura = 0;
  let anos = 0;

  if (altura1 === altura2) {
    return "As crianças tem igual altura e crescimento.";
  }

  if (altura1 !== altura2) {
    menorAltura = Math.min(altura1, altura2);
    maiorAltura = Math.max(altura1, altura2);
  }

  while (menorAltura < maiorAltura) {
    menorAltura = menorAltura * taxa1 + menorAltura;
    maiorAltura = maiorAltura * taxa2 + maiorAltura;
    anos++;
  }

  if (maiorAltura == Infinity) {
    return `A criança menor não ultrapassará a maior.`;
  }

  return `A criança menor ultrapassará a maior em ${anos} anos.`;
};

console.log(calcularAltura(120, 0.08, 130, 0.02));
console.log(calcularAltura(120, 0.08, 130, 0.02));
console.log(calcularAltura(120, 0.02, 130, 0.05));
