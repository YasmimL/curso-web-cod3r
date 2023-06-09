const esperaPor = (tempo = 2000) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), tempo);
  });
};

// esperaPor(2000)
//   .then(() => console.log("Executando promise..."))
//   .then(esperaPor)
//   .then(() => console.log("Executando promise..."))
//   .then(esperaPor)
//   .then(() => console.log("Executando promise..."))
//   .then(esperaPor);

function retornarValor() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(10), 5000);
  });
}

async function retornarValorRapido() {
  return 20;
}

async function executar() {
  let valor = await retornarValorRapido();

  await esperaPor(1500);
  console.log(`Async/Await ${valor}...`);

  await esperaPor(1500);
  console.log(`Async/Await ${valor + 1}...`);

  await esperaPor(1500);
  console.log(`Async/Await ${valor + 2}...`);

  return valor + 3;
}

async function executarDeVerdade() {
  const valor = await executar();
  console.log(valor);
}

executar().then(console.log);
