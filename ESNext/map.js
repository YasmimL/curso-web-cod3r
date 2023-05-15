// Com Map a chave pode ser uma função, número, um array, um objeto e não aceita repetições na chave

const tecnologias = new Map();
tecnologias.set("react", { famework: false });
tecnologias.set("angular", { famework: true });

console.log(tecnologias.react); // forma errada de chamar
console.log(tecnologias.get("react").famework);

const chavesVariadas = new Map([
  [function () {}, "função"],
  [{}, "Objeto"],
  [123, "Número"],
]);

chavesVariadas.forEach((vl, ch) => {
  console.log(ch, vl);
});

console.log(chavesVariadas.has(123));
chavesVariadas.delete(123);
console.log(chavesVariadas.has(123));
console.log(chavesVariadas.size);

chavesVariadas.set(123, "a");
chavesVariadas.set(123, "b");
chavesVariadas.set(456, "b");
console.log(chavesVariadas);
