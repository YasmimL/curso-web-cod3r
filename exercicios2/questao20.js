function areaDoTriangulo(base, altura) {
  let multiplicacao = base * altura;
  let media = multiplicacao / 2;

  return media.toFixed(2);
}

console.log(areaDoTriangulo(10, 15));
console.log(areaDoTriangulo(7, 9));
console.log(areaDoTriangulo(9.25, 13.1));
