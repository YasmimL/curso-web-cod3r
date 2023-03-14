let a = 7;
let b = 94;
let aux;

// antes da troca... a = 7 e b = 94
console.log(`a = ${a}`);
console.log(`b = ${b}`);

aux = a;
a = b;
b = aux;

// Outro tipo... [a, b] = [b, a]

// depois da troca... a = 94 e b = 7
console.log(`a = ${a}`);
console.log(`b = ${b}`);
