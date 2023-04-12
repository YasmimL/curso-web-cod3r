const inverso = (dado) => {
  const tipo = typeof dado;

  if (tipo === "boolean") {
    return !dado;
  } else if (tipo === "number") {
    return -dado;
  } else {
    return `Booleano ou número esperados, mas o parâmetro é do tipo ${tipo}.`;
  }
};

console.log(inverso(true));
console.log(inverso("6"));
console.log(inverso(-2000));
console.log(inverso("programação"));
console.log(inverso(2000));
