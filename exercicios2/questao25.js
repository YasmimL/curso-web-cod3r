const buscarPalavrasSemelhantes = (termo, palavras) => {
  return palavras.filter((palavra) => palavra.includes(termo));
};

console.log(
  buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"])
);

console.log(buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"]));
