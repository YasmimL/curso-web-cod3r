const classificacarTriangulo = (comprimento1, comprimento2, comprimento3) => {
  if (comprimento1 === comprimento2 && comprimento2 === comprimento3) {
    return "Triângulo Equilátero";
  } else if (
    comprimento1 !== comprimento2 &&
    comprimento2 !== comprimento3 &&
    comprimento3 !== comprimento1
  ) {
    return "Triângulo Escaleno";
  } else {
    return "Triângulo Isósceles";
  }
};

console.log(classificacarTriangulo(5, 5, 5));
console.log(classificacarTriangulo(4, 4, 5));
console.log(classificacarTriangulo(3, 4, 5));
