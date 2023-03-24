const formulaBhaskara = (a, b, c) => {
  let delta = b ** 2 - 4 * a * c;

  if (delta < 0) {
    return "Delta é negativo";
  } else {
    const raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
    const raiz2 = (-b - Math.sqrt(delta)) / (2 * a);

    return [raiz1, raiz2];
  }
};

console.log(formulaBhaskara(2, -6, 0));
console.log(formulaBhaskara(1, 3, 2));
console.log(formulaBhaskara(3, 1, 2));
