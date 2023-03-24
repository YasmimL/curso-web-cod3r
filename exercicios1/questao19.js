const calcularPedido = (codigo, quantidade) => {
  switch (codigo) {
    case 100:
      console.log(`${quantidade} cachorro quente, total: ${quantidade * 3}`);
      break;
    case 200:
      console.log(`${quantidade} hambúrguer simples, total: ${quantidade * 4}`);
      break;
    case 300:
      console.log(`${quantidade} cheeseburguer, total: ${quantidade * 5.5}`);
      break;
    case 400:
      console.log(`${quantidade} bauru, total: ${quantidade * 7.5}`);
      break;
    case 500:
      console.log(`${quantidade} refrigerante, total: ${quantidade * 3.5}`);
      break;
    case 600:
      console.log(`${quantidade} suco, total: ${quantidade * 2.8}`);
      break;
    default:
      console.log("Produto não existente.");
  }
};

calcularPedido(100, 2);
calcularPedido(200, 2);
calcularPedido(300, 2);
calcularPedido(400, 2);
calcularPedido(500, 2);
calcularPedido(600, 2);
calcularPedido(700, 2);
