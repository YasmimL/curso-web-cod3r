const realizarTroca = (vetorA, vetorB) => {
  [vetorA, vetorB] = [vetorB, vetorA];
  return `vetor A: [${vetorA}], vetor B: [${vetorB}]`;
};

console.log(realizarTroca([1, 2, 3], [4, 5, 6]));
