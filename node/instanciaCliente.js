// Node faz cache do objeto e retorna a mesma instancia
const contadorA = require("./instanciaUnica");
const contadorB = require("./instanciaUnica");

// Retorna uma nova função com nova instancia
const contadorC = require("./instanciaNova")();
const contadorD = require("./instanciaNova")();

contadorA.inc();
contadorA.inc();
console.log(contadorA.valor, contadorB.valor);

contadorC.inc();
contadorC.inc();
console.log(contadorC.valor, contadorD.valor);
