const filtrarNumeros = (array) => {
  const arrayNumeros = array.filter((elemento) => typeof elemento === "number");

  return arrayNumeros;
};

console.log(filtrarNumeros(["Javascript", 1, "3", "Web", 20]));
console.log(filtrarNumeros(["a", "c"]));
