const classificarConceitos = (notas) => {
  let conceitos = [];

  notas.forEach((nota, i) => {
    if (nota >= 0.0 && nota <= 4.9) {
      conceitos[i] = "D";
    } else if (nota >= 5.0 && nota <= 6.9) {
      conceitos[i] = "C";
    } else if (nota >= 7.0 && nota <= 8.9) {
      conceitos[i] = "B";
    } else if (nota >= 9.0 && nota <= 10.0) {
      conceitos[i] = "A";
    } else {
      conceitos[i] = "Nota inválida";
    }
  });

  return conceitos;
};

console.log(classificarConceitos([10, 13, 9, 8.2, 2.5, 7.7, 6.8]));
