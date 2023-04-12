const contarCaractere = (caractere, string) => {
  let arrayString = string.split("");
  let contador = 0;

  arrayString.filter((elemento) => {
    if (elemento.includes(caractere)) {
      contador += 1;
    }
  });

  return contador;
};

console.log(contarCaractere("r", "A sorte favorece os audazes"));

console.log(contarCaractere("c", "AConhece-te a ti mesmo"));
