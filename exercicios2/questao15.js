const receberSomenteOsParesDeIndicesPares = (array) => {
  const resultado = array.filter(
    (elemento, i) => elemento % 2 === 0 && i % 2 === 0
  );

  return resultado;
};

console.log(receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]));
console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]));
