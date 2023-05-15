// operador ... rest(juntas) / spread(espalhar)
// usar rest com parâmetro de função

// usar spread com objeto
const funcionaria = { nome: "Maria", salario: 12348.99 };
const clone = { ativo: true, ...funcionaria };
console.log(clone);

// usar spread com array
const grupoA = ["João", "Pedro", "Gloria"];
const grupoFinal = ["Maria", ...grupoA, "Rafaela"];
console.log(grupoFinal);
