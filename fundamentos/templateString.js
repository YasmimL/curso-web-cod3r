const nome = "Rebeca";
const concatenacao = "Olá " + nome + "!";
const templateString = `Olá ${nome}!`;

console.log(concatenacao);
console.log(templateString);

// expressões
console.log(`1 + 1 = ${1 + 1}`);

const up = (texto) => texto.toUpperCase();
console.log(`Ei... ${up("cuidado")}!`);
