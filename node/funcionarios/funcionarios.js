const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";
const axios = require("axios");

axios.get(url).then((response) => {
  const funcionarios = response.data;

  const mulheresChinesas = funcionarios.filter(
    (funcionario) => funcionario.pais === "China" && funcionario.genero === "F"
  );

  const menorSalario = mulheresChinesas.reduce((valorAnterior, valorAtual) => {
    if (valorAnterior.salario < valorAtual.salario) {
      return valorAnterior;
    }
    return valorAtual;
  });

  console.log(menorSalario);
});
