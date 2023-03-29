const alunos = [
  { nome: "João", nota: 7.9 },
  { nome: "Maria", nota: 9.2 },
];

// Imperativa - com passo a passo de como deve ser feito
let total1 = 0;
for (let i = 0; i < alunos.length; i++) {
  total1 += alunos[i].nota;
}
console.log(total1 / alunos.length);

// Declarativa - se importa com o que deve fazer
const getNota = (aluno) => aluno.nota;
const soma = (total, atual) => total + atual;
const total2 = alunos.map(getNota).reduce(soma);
console.log(total2 / alunos.length);
