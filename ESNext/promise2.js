// Inferno das callbacks

// setTimeout(() => {
//   console.log("Executando callback 1...");

//   setTimeout(() => {
//     console.log("Executando callback 2...");

//     setTimeout(() => {
//       console.log("Executando callback 3...");
//     }, 2000);
//   }, 2000);
// }, 2000);

const esperaPor = (tempo = 2000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Executando promise...");
      resolve("Vishhhh");
    }, tempo);
  });
};

esperaPor()
  .then(() => esperaPor())
  .then(esperaPor);
